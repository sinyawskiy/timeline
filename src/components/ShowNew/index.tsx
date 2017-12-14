import * as React from 'react';

import * as ItemCss from '../../assets/item.css';
import * as css from './style.css';

export class ShowNew extends React.Component<{}> {
	public render() {
		return <div className={`${ItemCss.item} ${css.root}`}>
			<button className={css.button} onClick={() => alert('load newest activities')}>Load new 13 activities</button>
			<div className={css.line} />
		</div>
	}
}