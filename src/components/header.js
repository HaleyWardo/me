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
						marginBottom: rhythm(1),
						marginTop: 0,
						justifyContent: `center`,
						display: `flex`
					}}
				>
					<Link
						style={{
							boxShadow: `none`,
							textDecoration: `none`,
							color: `inherit`,
							fontWeight: `500`
						}}
						to={`/`}
					>
						{this.props.title}
					</Link>
				</h1>
				<nav>
					<ul
						style={{
							display: `flex`,
							listStyle: `none`,
							justifyContent: `center`,
							borderTop: `2px solid #333333`,
							borderBottom: `2px solid #333333`
						}}>

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
									textDecoration: `none`,
									color: `inherit`,
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
									textDecoration: `none`,
									color: `inherit`,
								}}
								to={`/`}
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
									textDecoration: `none`,
									color: `inherit`,
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