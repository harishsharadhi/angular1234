package com.niit.Model;
 
//no need of putting @entity no need of adding it to database config because it s not a entity
//simply to check the out put we hav creatd it
 public class Chat {
	
	
	private String message;
	private String to;
	private String from;
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public String getTo() {
		return to;
	}
	public void setTo(String to) {
		this.to = to;
	}
	public String getFrom() {
		return from;
	}
	public void setFrom(String from) {
		this.from = from;
	}
	
	 
	@Override
	public String toString() {
		return "Chat [message=" + message + ", to=" + to + "]";
	}
}
