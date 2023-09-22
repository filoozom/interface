import { useTheme } from 'styled-components'

import { StyledSVG } from './shared'

export default function AlertTriangleFilled({ size = '16px', ...rest }: { size?: string; [k: string]: any }) {
  const theme = useTheme()
  return (
    <StyledSVG
      viewBox="0 0 24 24"
      fill={theme.deprecated_accentWarning}
      xmlns="http://www.w3.org/2000/svg"
      size={size}
      {...rest}
      data-testid="warning-icon"
    >
      <path d="M21.6074 17.1517L15.0004 4.7955C13.7204 2.4015 10.2814 2.4015 9.00042 4.7955L2.39349 17.1517C1.21949 19.3477 2.81353 21.9996 5.30853 21.9996H18.6923C21.1863 21.9996 22.7814 19.3467 21.6074 17.1517ZM11.2504 9.9996C11.2504 9.5856 11.5864 9.2496 12.0004 9.2496C12.4144 9.2496 12.7504 9.5856 12.7504 9.9996V13.9996C12.7504 14.4136 12.4144 14.7496 12.0004 14.7496C11.5864 14.7496 11.2504 14.4136 11.2504 13.9996V9.9996ZM12.0204 17.9996C11.4684 17.9996 11.0153 17.5516 11.0153 16.9996C11.0153 16.4476 11.4584 15.9996 12.0104 15.9996H12.0204C12.5734 15.9996 13.0204 16.4476 13.0204 16.9996C13.0204 17.5516 12.5724 17.9996 12.0204 17.9996Z" />
    </StyledSVG>
  )
}
