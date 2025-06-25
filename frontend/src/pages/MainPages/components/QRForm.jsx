import QRFormBasic from './qr-generator/QRFormBasic';
import QRFormLogo from './qr-generator/QRFormLogo';
import QRFormDownload from './qr-generator/QRFormDownload';

export default function QRForm(props) {
  return (
    <>
      <QRFormBasic {...props} />
      <QRFormLogo {...props} />
      <QRFormDownload {...props} />
    </>
  );
} 