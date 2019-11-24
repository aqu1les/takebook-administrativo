import styled, { css, keyframes } from "styled-components";

const shake = keyframes`
    from {
        transform: rotate(10deg);
    } 
    50% {
        transform: rotate(-10deg);
    }
    to {
        transform: rotate(0deg);
    }
`
const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

export const Header = styled.header`
	${props =>
        props.show &&
        css`
			display: none;
		`}
	height: 62px;
	position: absolute;
    max-width: 240px;
    width: 240px;
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
        * {
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }
        div {
            #btnNotification {
                cursor: pointer;
                margin-left: 30px;
                width: 23px;
                height: 23px;
                &:hover {
                    animation: ${shake} 450ms;
                }
            }
            #notification_counter {
                position: absolute;
                z-index: 1;
                background-color: red;
                width: 16px;
                height: 14px;
                color: #FFF;
                left: 23px;
                top: 15px;
                border-radius: 3px;
                font-size: 8pt;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: default;
            }
        }
        #notifications {
            position: absolute;
            top: 55px;
            right: 0;
            width: 0;
            height: 0;
            background-color: #FFFFFF;
            box-shadow: 0px 5px 4px 1px rgba(0, 0, 0, 0.2);
            border-radius: 0 0 0 8px;
            transition: height 200ms ease-in;
            display: flex;
            flex-direction: column;
            align-items: center;
            
            &.open {
                height: 500px;
                width: 240px;
                ul {
                    height: 100%;
                    width: 100%;
                    animation: ${fadeIn} 1s;
                }
                .divider {
                    margin-top: 10px;
                    width: 75%;
                    height: 0;
                    border: 0.5px solid rgba(121, 123, 124, 0.2);
                }
                @media only screen and (max-width: 576px) {
                    width: 100vw;
                }
            }            
        }
		#ProfilePic {
			width: 36px;
			height: 36px;
            margin-right: 20px;
            border-radius: 80px;
			&:hover {
				box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.2);
				border-radius: 50px;
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
        .vertical-divider {
            height: 50%;
            width: 0;
            border: 0.5px solid #F0F0F0;
        }
		#dropdown {
			position: relative;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			cursor: pointer;
			h5 {
				color: #188FB7;
				font-size: 11pt;
				font-weight: bold;
				padding: 8px;
			}
			i#arrow-down {
				border: solid #2BC1F3;
				border-width: 0 3px 3px 0;
				border-radius: 2px 2px 2px 2px;
				display: inline-block;
				padding: 3px;
                transform: rotate(45deg);
                transition: transform 250ms;
                margin-bottom: 2px;
                &.open {
                    transform: rotate(225deg);
                }
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
			width: 130px;
            height: 80px;
			right: 0;
			top: 62px;
			list-style: none;
			color: #000;
            box-shadow: 1px 9px 10px rgba(0, 0, 0, 0.2);
            transition: height 200ms;
            li {
                display: none;
            }
		}
		#dropdown-content.open {
            display: block;
            padding: 6px 16px;
            li {
				margin: 8px;
				cursor: pointer;
				display: flex;
				justify-content: space-between;
                align-items: center;                
                animation: ${fadeIn} 1s;
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
    }
    @media only screen and (max-width: 576px) {
        max-width: 200px;
    }    
`;
