import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

function ChatComponent() {
  const [room, setRoom] = useState('');
  const [socket, setSocket] = useState(null);
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Obtendo o nome da sala do URL.
    const room = window.location.pathname.replace(/\//g, '');
    setRoom(room);

    // Iniciando o socket.io no cliente.
    const socket = io(`http://localhost:3000/${room}`);
    setSocket(socket);

    // Ouvindo o evento de atualização de mensagens.
    socket.on('update_messages', (messages) => {
      updateMessagesOnScreen(messages);
    });

    return () => {
      // Limpar recursos ao desmontar o componente.
      socket.disconnect();
    };
  }, [window.location.pathname]);

  // Função para atualizar as mensagens na tela.
  function updateMessagesOnScreen(messages) {
    setMessages(messages);
  }

  function handleMessageSubmit(e) {
    e.preventDefault();

    if (!user) {
      alert('Defina um usuário');
      return;
    }

    const message = e.target.elements.msg.value;
    e.target.elements.msg.value = '';
    socket.emit('New_message', { user: user, msg: message });
  }

  function handleUserSubmit(e) {
    e.preventDefault();

    const newUser = e.target.elements.user.value;
    setUser(newUser);
  }

  return (
    <div>
      {user ? (
        <form onSubmit={handleMessageSubmit}>
          <input type="text" name="msg" placeholder="Digite sua mensagem" />
          <button type="submit">Enviar</button>
        </form>
      ) : (
        <form onSubmit={handleUserSubmit}>
          <input type="text" name="user" placeholder="Digite seu nome de usuário" />
          <button type="submit">Entrar</button>
        </form>
      )}

      <div id="messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.user === user ? 'sent' : 'received'}`}
          >
            {message.user}: {message.msg}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChatComponent;
