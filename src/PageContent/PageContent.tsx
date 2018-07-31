import * as React from "react"
import Confirm, { ConfirmOptions } from "../Internals/Confirm"
import Modal, { ModalOptions } from "../Internals/Modal"
import { PageProps } from "../Page/Page"
import styled from "../utils/styled"

export interface ModalConfirmContext {
  modal: (modalOptions: ModalOptions) => void
  confirm: (confirmOptions: ConfirmOptions) => void
}

export interface Props {
  /** Children to render, you */
  children?: PageProps["children"]
  /** Areas template for `PageArea` disposition */
  areas?: "main" | "main side" | "side main"
  /** Fill the entire width */
  fill?: boolean
}

const StyledPageContent = styled("div")<{ areas?: Props["areas"]; fill_?: boolean }>(props => {
  const gridTemplateColumns = {
    main: "auto",
    "main side": "auto 280px",
    "side main": "280px auto",
  }[props.areas || "main"]

  return {
    gridTemplateColumns,
    display: "grid",
    alignItems: "start",
    gridTemplateAreas: `"${props.areas}"`,
    gridGap: props.theme.space.element,
    width: "100%",
    height: "100%",
    minWidth: 800,
    maxWidth: props.fill_ ? "none" : 1150,
    padding: props.theme.space.element,
  }
})

const Container = styled("div")<{ fill_?: boolean }>(() => ({
  position: "relative",
  width: "100%",
  height: "100%",
  overflow: "auto",
}))

// `fill` must be rename internally to avoid conflict with the native `fill` DOM attribute
const PageContent: React.SFC<Props> = ({ fill, children, ...props }) => {
  return (
    <Modal>
      {modal => (
        <Confirm>
          {confirm => (
            <Container>
              <StyledPageContent {...props} fill_={fill}>
                {typeof children === "function" ? children({ confirm, modal }) : children}
              </StyledPageContent>
            </Container>
          )}
        </Confirm>
      )}
    </Modal>
  )
}

export default PageContent
