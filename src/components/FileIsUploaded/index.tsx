import * as React from 'react';

import {
  DocumentCard,
  DocumentCardActivity,
  DocumentCardPreview,
  DocumentCardTitle,
  IDocumentCardPreviewProps,
  DocumentCardType
} from 'office-ui-fabric-react/lib/DocumentCard';

import pptIcon from '../../assets/iconppt.png';
import personaFemale from '../../assets/persona.png';
import * as ItemCss from '../../assets/item.css';

interface FileIsUploadedProps {
  highlight?: boolean;
}

export class FileIsUploaded extends React.Component<FileIsUploadedProps> {
	public render() {
   let previewProps: IDocumentCardPreviewProps = {
        getOverflowDocumentCountText: (overflowCount: number) => `+${overflowCount} more`,
        previewImages: [
          {
            name: 'Revenue stream proposal fiscal year 2016 version02.pptx',
            url: 'http://bing.com',
            //previewImageSrc: TestImages.documentPreview,
            iconSrc: pptIcon,
            width: 144
          },
          {
            name: 'New Contoso Collaboration for Conference Presentation Draft',
            url: 'http://bing.com',
            //previewImageSrc: TestImages.documentPreviewTwo,
            iconSrc: pptIcon,
            width: 144
          },
          {
            name: 'Spec Sheet for design',
            url: 'http://bing.com',
            //previewImageSrc: TestImages.documentPreviewThree,
            iconSrc: pptIcon,
            width: 144
          },
          {
            name: 'Contoso Marketing Presentation',
            url: 'http://bing.com',
            //previewImageSrc: TestImages.documentPreview,
            iconSrc: pptIcon,
            width: 144
          },
        ],
      };

    return <div className={ItemCss.item} data-highlight={this.props.highlight ? 'true' : null}>
      <DocumentCard type={ DocumentCardType.compact } onClickHref='http://bing.com'>
        <DocumentCardPreview { ...previewProps } />
        <div className='ms-DocumentCard-details'>
          <DocumentCardTitle
            title='4 files were uploaded'
            shouldTruncate={ true }
          />
          <DocumentCardActivity
            activity='Created a few minutes ago'
            people={
              [
                { name: 'Kat Larrson', profileImageSrc: personaFemale }
              ]
            }
          />
        </div>
      </DocumentCard>
      </div>
	}
}