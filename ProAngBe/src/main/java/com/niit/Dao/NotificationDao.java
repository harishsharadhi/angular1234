package com.niit.Dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.niit.Model.Notification;
@Repository("notificationDao")
public interface NotificationDao {
	List<Notification>getNotificationsNotViewed(String email);
	Notification updateNotification(int id);
	List<Notification> getNotifications(String email,int id);

}
