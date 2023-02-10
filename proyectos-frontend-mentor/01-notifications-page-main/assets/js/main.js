const viewAllNotifications = () => {
    const unreadNotifications = document.querySelectorAll('.notification--unread');
    unreadNotifications.forEach((unreadNotification) => {
        unreadNotification.classList.remove('notification--unread');
        //console.log({ unreadNotification });
    });
}

const resetNotificationCount = () => {
    const notificationsCount = document.querySelector( '.unread-count' );
    notificationsCount.textContent = 0;
}

const markAllNotificationHowReaded = () => {
    viewAllNotifications();
    resetNotificationCount();
}

const createNewNotification = ( notification ) => {
    // Notification wrapper
    const notificationElement = document.createElement('article');
    notificationElement.classList.add( 'notification' );

    if ( notification.unread ) {
        notificationElement.classList.add( 'notification--unread' );
    }
    // Avatar
    const avatarElement = document.createElement('img');
    avatarElement.classList.add('avatar');
    avatarElement.alt = notification.name;
    avatarElement.src = notification.avatar;

    // Title
    const titleElement = document.createElement( 'h2' );
    titleElement.classList.add( 'notification__title' );
    let titleContent = `<strong>${ notification.name }</strong> ${ notification.content }`;

    if ( notification.type === 'link' ) {
        titleContent += ` <a href="" class="link link--${ notification.meta.linkType }">${ notification.meta.linkText }</a>`;   
    }

    // Is notification unread
    if ( notification.unread ) {
        titleContent += `<span class="unread-bubble"></span>`;
    }

    titleElement.innerHTML = titleContent;

    const dateElement = document.createElement('p');
    dateElement.classList.add('date');
    dateElement.textContent = notification.date;

    notificationElement.appendChild(avatarElement);
    notificationElement.appendChild(titleElement);
    notificationElement.appendChild(dateElement);

    return notificationElement;
}

const markAllHowReadedElement = document.querySelector( '.header__link' );
markAllHowReadedElement.addEventListener( 'click', markAllNotificationHowReaded);

const data = [
    {
        avatar: 'assets/images/avatar-mark-webber.webp',
        name: 'Mark Webber',
        content: 'reacted to your recent post',
        date: '1m ago',
        unread: true,
        type: 'link',
        meta: {
          linkType: 'post',
          linkText: 'My first tournament today!',
        },
      },
      {
        avatar: 'assets/images/avatar-angela-gray.webp',
        date: '5m ago',
        name: 'Angela Gray',
        content: 'followed you',
        unread: true,
        type: 'standard',
      },
      {
        avatar: 'assets/images/avatar-jacob-thompson.webp',
        date: '1 day ago',
        name: 'Jacob Thompson',
        content: 'has joined your group',
        unread: true,
        type: 'link',
        meta: {
          linkType: 'group',
          linkText: 'Chess Club',
        },
      },
      {
        avatar: 'assets/images/avatar-rizky-hasanuddin.webp',
        date: '5 days ago',
        name: 'Rizky Hasanuddin',
        content: 'sent you a private message',
        unread: false,
        type: 'message',
        meta: {
          message:
            "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
        },
      },
      {
        avatar: 'assets/images/avatar-kimberly-smith.webp',
        date: '1 week ago',
        name: 'Kimberly Smith',
        content: 'commented on your picture',
        unread: false,
        type: 'picture',
        meta: {
          picture: 'assets/images/image-chess.webp',
        },
      },
      {
        avatar: 'assets/images/avatar-nathan-peterson.webp',
        date: '2 weeks ago',
        name: 'Nathan Peterson',
        content: 'reacted to your recent post',
        unread: false,
        type: 'link',
        meta: {
          linkType: 'post',
          linkText: '5 end-game strategies to increase your win rate',
        },
      },
      {
        avatar: 'assets/images/avatar-anna-kim.webp',
        date: '2 weeks ago',
        name: 'Anna Kim',
        content: 'has left the group',
        unread: false,
        type: 'link',
        meta: {
          linkType: 'group',
          linkText: 'Chess Club',
        },
      },
]


function getAllNotifications () {
    data.forEach((notification) => {
        const notificationData = createNewNotification( notification );
        console.log(notificationData);
        main.appendChild( notificationData );
    });
}

const main = document.querySelector('.notifications');
getAllNotifications(); //1:58
