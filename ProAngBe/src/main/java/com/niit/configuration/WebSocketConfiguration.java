package com.niit.configuration;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.ChannelRegistration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;
@Configuration
@EnableWebSocketMessageBroker
@ComponentScan(basePackages="com.niit")
public class WebSocketConfiguration implements WebSocketMessageBrokerConfigurer {
	
	@Override
	public void registerStompEndpoints(StompEndpointRegistry registry) {
		registry.addEndpoint("/chatmodule").withSockJS();  //this is used to start connection bw client nd server
		
	}

	
	@Override
	public void configureMessageBroker(MessageBrokerRegistry registry) {
		//  destinationprefixes is used by server to send messages to the browser this s server side
		//new user joins the chat room, send the user name to the other uers
		//chat messages has to be sent to all users
		// /queue/-destinationprefix-sends chat message  from servr to client(chat)
		// /topic/ -destinationPrefix  -  send user name to all the clients(string)
		registry.enableSimpleBroker("/queue/","/topic/");
		//for browser  - to send message from browser to client this s client side
		registry.setApplicationDestinationPrefixes("/app");
	}
	@Override
	public void configureClientInboundChannel(ChannelRegistration registration) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void configureClientOutboundChannel(ChannelRegistration registration) {
		// TODO Auto-generated method stub
		
	}
 
}
