import React from 'react';
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"

export default class Header extends React.Component {
	render() {
		return (
			<div>
				<h1
					style={{
						...scale(1.5),
						display: `flex`,
						justifyContent: `center`,
						marginBottom: rhythm(1),
						marginTop: 0
					}}
				>
					<Link
						style={{
							boxShadow: `none`,
							color: `inherit`,
							fontWeight: `500`,
							fontSize: `60px`,
							textAlign: `center`,
							textDecoration: `none`
						}}
						to={`/`}
					>
						{this.props.title}
					</Link>
				</h1>
				<nav>
					<ul
						style={{
							borderBottom: `2px solid #333333`,
							borderTop: `2px solid #333333`,
							display: `flex`,
							justifyContent: `center`,
							listStyle: `none`,
							marginLeft: '0'
						}}>

						<li
							style={{
								marginBottom: `0`,
								padding: `5px 0`
							}}
						>
							<Link
								className="header_link"
								style={{
									boxShadow: `none`,
									color: `inherit`,
									textDecoration: `none`,
								}}
								to={`/`}
							>
								Home
							</Link>
						</li>

						<li
							style={{
								marginBottom: `0`,
								padding: `5px 0 5px 30px`
							}}
						>
							<Link
								className="header_link"
								style={{
									boxShadow: `none`,
									color: `inherit`,
									textDecoration: `none`,
								}}
								to='/about'
							>
								About Me
							</Link>
						</li>

						<li
							style={{
								marginBottom: `0`,
								padding: `5px 0 5px 30px`
							}}
						>
							<Link
								className="header_link"
								style={{
									boxShadow: `none`,
									color: `inherit`,
									textDecoration: `none`,
								}}
								to='/contact'
							>
								Contact
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		);
	}
}