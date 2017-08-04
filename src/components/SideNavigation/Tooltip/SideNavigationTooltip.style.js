// @flow
export default (props: { position?: string }, theme: THEME): {} => {
  const tooltipCaretSize = 10;
  const tooltipPosition = {};
  const tooltipCaretPosition = {};

  // Where do we put the caret and anchor the tooltip?
  switch (props.position) {
    case 'bottom':
      tooltipPosition.bottom = 0;

      tooltipCaretPosition.bottom = theme.spacing;
      tooltipCaretPosition.transform = 'rotate(45deg)';
      break;
    default:
      tooltipCaretPosition.top = '50%';
      tooltipCaretPosition.transform = 'translateY(-50%) rotate(45deg)';
      break;
  }

  return {
    position: 'absolute',
    left: `calc(100% + ${theme.spacing / 2}px)`,
    padding: theme.spacing / 2,
    borderRadius: 4,
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)',
    transition: '.15s opacity ease, .3s transform ease',
    background: theme.greys[90],
    color: theme.greys.white,
    ...tooltipPosition,

    // This pseudo-friend extends the clickable area of the far-away tooltip.
    '&::after': {
      content: "''",
      position: 'absolute',
      left: '-100%',
      top: 0,
      display: 'block',
      width: '100%',
      height: '100%',
    },

    '&::before': {
      content: "''",
      position: 'absolute',
      left: tooltipCaretSize * -0.5,
      width: tooltipCaretSize,
      height: tooltipCaretSize,
      zIndex: 0,
      background: theme.greys[90],
      ...tooltipCaretPosition,
    },
  };
};
