import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
    const handleHello = () => {
        const botMessage = createChatBotMessage('Hola, encantado de conocerte 😎');

        setState((prev) => ({ 
            ...prev, //Usa un spread operator, que permite que un iterable (como una function o un string) sea expandido
            messages: [...prev.messages, botMessage],
        }));
    };

    //Pone la funcion de handleHello en el objeto de acciones para pasar a MessageParser
    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        handleHello,
                    },
                });
            })}
        </div>
    );
}

export default ActionProvider;

/*
class ActionProvider {
    constructor(
     createChatBotMessage,
     setStateFunc,
     createClientMessage,
     stateRef,
     createCustomMessage,
     ...rest
   ) {
     this.createChatBotMessage = createChatBotMessage;
     this.setState = setStateFunc;
     this.createClientMessage = createClientMessage;
     this.stateRef = stateRef;
     this.createCustomMessage = createCustomMessage;
   }
 }
 
 export default ActionProvider
 */