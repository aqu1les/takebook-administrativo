import styled, { css } from "styled-components";
export const Header = styled.header`
	${props =>
        props.show &&
        css`
			display: none;
		`}
	height: 62px;
	position: absolute;
	width: 260px;
	top: 0;
	right: 0;
	z-index: 10;
	nav {
		height: 100%;
		width: 100%;
		background-color: #fff;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-radius: 0 0 0 8px;
		box-shadow: 1px 1px 16px 0px rgba(0, 0, 0, 0.2);
		#btnNotification {
			cursor: pointer;
			margin-left: 30px;
		}
		#ProfilePic {
			width: 36px;
			height: 36px;
			margin-right: 20px;
			&:hover {
				box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.2);
				border-radius: 50px;
				opacity: 0.8;
			}
		}
		#userOptions {
			background-color: unset;
			border: none;
			cursor: pointer;
			margin-right: 20px;
			&:focus {
				outline: none;
				border: none;
			}
		}
		#dropdown {
			position: relative;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			cursor: pointer;
			h5 {
				color: #0080e2;
				font-size: 11pt;
				font-weight: bold;
				padding: 8px;
			}
			i.arrow-down {
				border: solid #0080e2;
				border-width: 0 3px 3px 0;
				border-radius: 2px 2px 2px 2px;
				display: inline-block;
				padding: 3px;
				transform: rotate(45deg);
				margin-bottom: 2px;
			}
			&:hover {
				opacity: 0.8;
			}
		}
		#dropdown-content {
			display: none;
			border-radius: 0 0 0 20px;
			position: absolute;
			z-index: 2;
			background-color: #fff;
			min-width: 130px;
			min-height: 80px;
			padding: 6px 16px;
			right: 0;
			top: 62px;
			list-style: none;
			color: #000;
			box-shadow: 1px 9px 10px rgba(0, 0, 0, 0.2);
			li {
				margin: 8px;
				cursor: pointer;
				display: flex;
				justify-content: space-between;
                align-items: center;
                a {
                    text-decoration: none;
                    &:visited {
                        color: #000;
                    }
                }
				&:hover {
					opacity: 0.5;
				}
			}
		}
		#dropdown-content.open {
			display: block;
		}
	}
`;