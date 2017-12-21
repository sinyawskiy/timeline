import * as React from 'react';

import * as ItemCss from '../../assets/item.css';
import * as FileCss from './index.css';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faFileExcel } from '@fortawesome/fontawesome-free-regular';

interface FileIsUploadedProps {
  highlight?: boolean;
  user: {
    avatar: string,
    userName: string,
  },
  filename: string,
  timestamp: Date,
}

export class FileIsUploaded extends React.Component<FileIsUploadedProps> {
	public render() {
    const { user, filename, timestamp } = this.props;
    return (<div className={`${ItemCss.item} ${FileCss.root}`} data-highlight={this.props.highlight ? 'true' : null}>
      <div className={FileCss.icon}>
        <FontAwesomeIcon icon={faFileExcel}/>
      </div>
      <div className={FileCss.content}>
        <div>File <a href="#">{this.props.filename}</a> was uploaded</div>

        <div className={FileCss.user}>
          <img src={user.avatar} className={FileCss.avatar} />
          <div className={FileCss.userName}><a href="#">{user.userName}</a></div>
          <div className={FileCss.timestamp}>Created a few minutes ago</div>
        </div>
      </div>
      </div>);
	}
}