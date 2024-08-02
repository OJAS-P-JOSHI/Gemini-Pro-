import { ChatData } from "../context/ChatContext";
import './Header.css'; // Import the CSS file

const Header = () => {
  const { chats } = ChatData();

  const neonStyle = {
    color: '#ffffff', // Base color for text
    textShadow: '0 0 4px #ff0081, 0 0 8px #ff0081, 0 0 16px #ff0081, 0 0 32px #ff0081, 0 0 64px #ff0081',
    animation: 'neonGlow 9s infinite alternate'
  };

  return (
    <div>
      <p className="text-lg mb-6" style={neonStyle}>Ready to Learn Something New?</p>
      {chats && chats.length === 0 && (
        <p className="text-lg mb-6" style={neonStyle}>Start a New Chat to Continue</p>
      )}
    </div>
  );
};

export default Header;
