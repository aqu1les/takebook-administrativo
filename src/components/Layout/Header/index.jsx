import React, { useState, useRef, useEffect } from 'react';
import Pusher from 'pusher-js';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import notificationIcon from '../../../assets/icons/notifications.svg';
import defaultProfile from '../../../assets/icons/defaultProfile.svg';
import { AppHeader, NotificationCounter } from './style';
import Notification from '../../Notification';
import { addAdvertAction } from '../../../redux/Actions/adverts';
import {
    addNotificationAction,
    openNotificationAction,
} from '../../../redux/Actions/notifications';
import api from '../../../services/api';
import { logOutAction } from '../../../redux/Actions/auth';

export default function Header() {
    const dispatch = useDispatch();
    const [toProfile, setToProfile] = useState(false);
    const user = useSelector(state => state.auth);
    const dropdownContent = useRef(null);
    const dropdownArrow = useRef(null);
    const notificationsRef = useRef(null);
    const notifications = useSelector(state => state.notifications.data);
    const unseenNotifications = useSelector(
        state => state.notifications.unseen
    );

    useEffect(() => {
        document
            .querySelector('main')
            .addEventListener('mouseup', handleClickOutside);
        document
            .querySelector('aside')
            .addEventListener('mouseup', handleClickOutside);
    });

    useEffect(() => {
        Pusher.logToConsole = true;
        const pusher = new Pusher('06aeebf69251841ae50a', {
            cluster: 'us2',
            forceTLS: true,
        });

        const broadcastChannel = pusher.subscribe(`all-clients`);
        broadcastChannel.bind('book-accepted', function(event) {
            dispatch(addAdvertAction(event.message));
        });

        const privateChannel = pusher.subscribe(`userID${user.id}`);
        privateChannel.bind('new-notification', function(event) {
            dispatch(addNotificationAction(event.message));
            if (event.message.book) {
                dispatch(addAdvertAction(event.message.book));
            }
        });
    }, [user.id, dispatch]);

    function handleClickOutside() {
        dropdownArrow.current.classList.remove('open');
        dropdownContent.current.classList.remove('open');
        notificationsRef.current.classList.remove('open');
    }

    function openNotifications(e) {
        notificationsRef.current.classList.toggle('open');
        dropdownContent.current.classList.remove('open');
        dropdownArrow.current.classList.remove('open');
    }

    function handleDropdown(e) {
        dropdownContent.current.classList.toggle('open');
        dropdownArrow.current.classList.toggle('open');
        notificationsRef.current.classList.remove('open');
    }

    async function handleOpenNotification(notification) {
        if (notification.opened) return;
        const response = await api.put(`/notifications/${notification.id}`);
        if (response.data) {
            dispatch(openNotificationAction(notification));
        }
    }

    const handleRedirectProfile = e => setToProfile(true);
    const logoff = e => dispatch(logOutAction());

    return (
        <>
            {toProfile ? <Redirect to="/me" /> : null}
            <AppHeader>
                <nav role="navigation">
                    <div onClick={openNotifications}>
                        <img
                            src={notificationIcon}
                            alt="Ícone de notificação"
                            id="btnNotification"
                        />
                        <NotificationCounter
                            show={unseenNotifications > 0 ? true : false}
                        >
                            {unseenNotifications}
                        </NotificationCounter>
                    </div>
                    <div id="notifications" ref={notificationsRef}>
                        <div className="divider"></div>
                        <ul className="notifications-list custom-scroll">
                            {notifications
                                ? notifications.map((notification, index) => (
                                      <NavLink
                                          key={notification.id}
                                          to="/adverts"
                                          onClick={() =>
                                              handleOpenNotification(
                                                  notification
                                              )
                                          }
                                      >
                                          <Notification
                                              notification={notification}
                                          />
                                      </NavLink>
                                  ))
                                : ''}
                        </ul>
                    </div>
                    <div className="vertical-divider"></div>
                    <div id="dropdown" onClick={handleDropdown}>
                        <h5>
                            {`${user.first_name} 
                            ${user.last_name.substring(0, 1)}.`}
                        </h5>
                        <i id="arrow-down" ref={dropdownArrow}></i>
                    </div>
                    <ul id="dropdown-content" ref={dropdownContent}>
                        <li onClick={handleRedirectProfile}>
                            <NavLink to="/me">Perfil</NavLink>
                        </li>
                        <hr />
                        <li onClick={logoff}>
                            Sair
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path d="M16 9v-4l8 7-8 7v-4h-8v-6h8zm-16-7v20h14v-2h-12v-16h12v-2h-14z" />
                            </svg>
                        </li>
                    </ul>
                    <img
                        src={user.avatar ? user.avatar : defaultProfile}
                        alt="Foto do usuário"
                        title="Imagem do usuário"
                        id="ProfilePic"
                    />
                </nav>
            </AppHeader>
        </>
    );
}
/*
	render() {
		if (this.state.logout) return <Redirect to="/login" />;
		else {
			return (
				<Header>
					<nav role="navigation">
						<div onClick={this.openNotifications}>
							<img
								src={notificationIcon}
								alt="Ícone de notificação"
								id="btnNotification"
							/>
							<div id="notification_counter">10</div>
						</div>
						<div id="notifications" ref="notifications">
							<div className="divider"></div>
						</div>
						<div className="vertical-divider"></div>
						<div id="dropdown" onClick={this.handleDropdown}>
							<h5>{this.state.user_name}</h5>
							<i id="arrow-down" ref="dropdownArrow"></i>
						</div>
						<ul id="dropdown-content" ref="dropdownContent">
							<li onClick={this.handleRedirectProfile}>
								<NavLink to="/me">Perfil</NavLink>
							</li>
							<hr />
							<li onClick={this.logout}>
								Sair
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
								>
									<path d="M16 9v-4l8 7-8 7v-4h-8v-6h8zm-16-7v20h14v-2h-12v-16h12v-2h-14z" />
								</svg>
							</li>
						</ul>
						<img
							src={this.state.avatar}
							alt="Foto do usuário"
							title="Imagem do usuário"
							id="ProfilePic"
						/>
					</nav>
				</Header>
			);
		}
	}
}
*/
