import * as React from "react"
import styled from "react-emotion"
import { OperationalStyleConstants } from "../utils/constants"
import colorCalculator from "tinycolor2"
import { Css } from "../types"

/**
 * In order to allow for tooltips that have a sensible max-width that adjusts its width for shorter text,
 * and in order to have that working reliably across browsers, this implementation renders the tooltip offscreen
 * in order to determine how wide it would be were it to not do line breaks at any width.
 * The actual tooltip is rendered with this information extracted from the DOM node.
 */

export interface Props {
  className?: string
  children?: React.ReactNode
  /** Smart-positioned tooltip, with positioning reversed so it doesn't flow out of the window's bounding box. Currently works for left and top-positioned tooltips. */
  smart?: boolean
  /** Top-positioned tooltip */
  top?: boolean
  /** Left-positioned tooltip */
  left?: boolean
  /** Right-positioned tooltip */
  right?: boolean
  /** Bottom-positioned tooltip */
  bottom?: boolean
}

export interface State {
  // bbTop is an abbreviation of boundingBoxTop
  bbTop: number
  bbBottom: number
  bbLeft: number
  bbRight: number
  singleLineTextWidth: number
}

type Position = "top" | "left" | "right" | "bottom"

const Container = styled("div")(
  ({
    position,
    offScreenWidthTest,
    singleLineTextWidth,
    theme,
  }: {
    position: Position
    offScreenWidthTest?: boolean
    singleLineTextWidth: number
    theme?: OperationalStyleConstants
  }) => {
    const backgroundColor = colorCalculator(theme.color.black)
      .setAlpha(0.9)
      .toString()
    return {
      backgroundColor,
      label: "tooltip",
      color: theme.color.white,
      position: "absolute",
      zIndex: theme.deprecated.baseZIndex + 101,
      borderRadius: 2,
      boxShadow: theme.deprecated.shadows.popup,
      "& > p": {
        fontSize: 11,
        lineHeight: 1.3,
        margin: 0,
        padding: "2px 6px",
        textAlign: "center",
      },
      ...(offScreenWidthTest
        ? {
            width: "fit-content",
            whiteSpace: "nowrap",
            position: "fixed",
            opacity: 0.01,
            top: -200,
            left: -200,
          }
        : {
            // If there was an issue determining singleLineTextWidth, default to the 150px width
            // Otherwise, honor the single line text width unless greater than 150px.
            width: singleLineTextWidth === 0 ? 150 : Math.min(singleLineTextWidth + 4, 150),
          }),
      ...(() => {
        if (position === "top") {
          return {
            left: "50%",
            transform: "translate3d(-50%, calc(-100% - 6px), 0)",
          }
        }

        if (position === "bottom") {
          return {
            left: "50%",
            top: "100%",
            transform: "translate3d(-50%, 6px, 0)",
          }
        }

        if (position === "left") {
          return {
            top: "50%",
            left: -6,
            transform: "translate3d(-100%, -50%, 0)",
          }
        }

        if (position === "right") {
          return {
            top: "50%",
            right: -6,
            transform: "translate3d(100%, -50%, 0)",
          }
        }

        return {}
      })(),
      // This pseudo-element extends the clickable area of the far-away tooltip.
      "&::after": {
        content: "''",
        position: "absolute",
        top: 0,
        left: theme.deprecated.spacing * -2,
        display: "block",
        width: theme.deprecated.spacing * 2,
        height: "100%",
      },
      // They say behind every great tooltip is a great caret.
      "&::before": {
        content: "''",
        position: "absolute",
        zIndex: theme.deprecated.baseZIndex - 1,
        width: 0,
        height: 0,
        ...(() => {
          if (position === "top") {
            return {
              bottom: -4,
              left: `calc(50% - 6px)`,
              borderLeft: "6px solid transparent",
              borderRight: "6px solid transparent",
              borderTop: `6px solid ${backgroundColor}`,
            }
          }

          if (position === "bottom") {
            return {
              top: -4,
              left: `calc(50% - 6px)`,
              borderLeft: "6px solid transparent",
              borderRight: "6px solid transparent",
              borderBottom: `6px solid ${backgroundColor}`,
            }
          }

          if (position === "left") {
            return {
              right: -4,
              top: `calc(50% - 6px)`,
              borderTop: "6px solid transparent",
              borderBottom: "6px solid transparent",
              borderLeft: `6px solid ${backgroundColor}`,
            }
          }

          if (position === "right") {
            return {
              left: -4,
              top: `calc(50% - 6px)`,
              borderTop: "6px solid transparent",
              borderBottom: "6px solid transparent",
              borderRight: `6px solid ${backgroundColor}`,
            }
          }

          return {}
        })(),
      },
    }
  },
)

class Tooltip extends React.Component<Props, State> {
  state = {
    bbTop: 0,
    bbLeft: 0,
    bbRight: 0,
    bbBottom: 0,
    singleLineTextWidth: 0,
  }

  containerNode: HTMLElement
  offScreenWidthTestNode: HTMLElement

  setDomProperties() {
    if (!this.offScreenWidthTestNode || !this.containerNode) {
      return
    }
    const bbOffScreen = this.offScreenWidthTestNode.getBoundingClientRect()
    const bbRect = this.containerNode.getBoundingClientRect()
    this.setState(prevState => ({
      bbTop: bbRect.top,
      bbBottom: bbRect.bottom,
      bbLeft: bbRect.left,
      bbRight: bbRect.right,
      singleLineTextWidth: bbOffScreen.width,
    }))
  }

  componentDidMount() {
    this.setDomProperties()
  }

  render() {
    let position: Position = "top"

    if (this.props.left) {
      position = "left"
    }

    if (this.props.right) {
      position = "right"
    }

    if (this.props.bottom) {
      position = "bottom"
    }

    if (this.props.smart) {
      /** @todo implement bounding box checks for right- and bottom-placed tooltips.
       * This should be easier once the OperationalUI provides window dimensions in context.
       */
      if (this.state.bbLeft < 0 && String(position) === "left") {
        position = "right"
      }

      if (this.state.bbTop < 0 && String(position) === "top") {
        position = "bottom"
      }
    }

    return (
      <>
        {/* Test node rendered to determine how wide the text is if it were written in a single line. */}
        <Container
          position="bottom"
          offScreenWidthTest
          singleLineTextWidth={this.state.singleLineTextWidth}
          innerRef={node => {
            this.offScreenWidthTestNode = node
          }}
        >
          {/* Wrapping in a paragraph tag is necessary in order to have Safari read the correct single line width. */}
          <p>{this.props.children}</p>
        </Container>
        <Container
          singleLineTextWidth={this.state.singleLineTextWidth}
          position={position}
          innerRef={node => {
            this.containerNode = node
          }}
        >
          {/* Wrapping in a paragraph tag is necessary in order to have Safari read the correct single line width. */}
          <p>{this.props.children}</p>
        </Container>
      </>
    )
  }
}

export default Tooltip
