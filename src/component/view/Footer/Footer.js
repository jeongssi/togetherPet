import { SmileOutlined } from '@ant-design/icons';

function Footer() {
  return (
    <div style={{
      height: '80px',
      display: 'grid',
      alignContent: 'center',
      justifyContent: 'center',
      fontSize: '1.2rem',
      //! lineHeight: '80px',
      //! textAlign: 'center',
      backgroundColor: '#001529',
      color: '#FFF',
      marginTop: 'px',
    }}>
      <p> Together_Pet <SmileOutlined /> </p>
    </div>
  );
}

export default Footer;