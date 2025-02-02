import CallToAction from './CallToAction';
import Image from 'next/image';
import classNames from './HomepageHeader.module.css';
import lightDiagram from '../public/assets/serverless-iiif-diagram.png';

const HomepageHeader = () => {
  return (
    <div className={classNames.header}>
      <h1 className={classNames.headline}>Fast, zoomable images without servers</h1>
      <p className={classNames.subtitle}>
       A cost-effective, infinitely scalable IIIF 2.1 image api compliant service packaged as an AWS Serverless Application with minimum setup and no maintenance. Suitable for large institutional collections or small digital humanities projects. 
      <br />Community Driven. Open Source.  
      </p>
      <CallToAction href='/docs' text='Get started' />

      <Image
        src={lightDiagram}
        alt='IIIF Image API'
        style={{
          marginTop: '2rem',
          width: '100%'
        }}
      />
    </div>
  );
};

export default HomepageHeader;
