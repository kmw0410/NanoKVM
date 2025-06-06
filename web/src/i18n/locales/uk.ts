const uk = {
  translation: {
    head: {
      desktop: 'Віддалений робочий стіл',
      login: 'Вхід',
      changePassword: 'Змінити пароль',
      terminal: 'Термінал',
      wifi: 'Wi-Fi'
    },
    auth: {
      login: 'Вхід',
      placeholderUsername: "Введіть ім'я користувача",
      placeholderPassword: 'Введіть пароль',
      placeholderPassword2: 'Введіть пароль ще раз',
      noEmptyUsername: "Ім'я користувача не може бути порожнім",
      noEmptyPassword: 'Пароль не може бути порожнім',
      noAccount: 'Не вдалося отримати інформацію про користувача, оновіть веб-сторінку або скиньте пароль',
      invalidUser: "Недійсне ім'я користувача або пароль",
      error: 'Якась халепа! Непередбачена помилка :(',
      changePassword: 'Змінити пароль',
      changePasswordDesc: 'Для безпеки вашого пристрою, будь ласка, змініть пароль для входу в веб-інтерфейс.',
      differentPassword: 'Паролі не збігаються',
      illegalUsername: "Ім'я користувача містить недопустимі символи",
      illegalPassword: 'Пароль містить недопустимі символи',
      forgetPassword: 'Забули пароль',
      ok: 'Ок',
      cancel: 'Скасувати',
      loginButtonText: 'Увійти',
      tips: {
        reset1:
          'Щоб скинути паролі, натискаючи та тримаючи кнопку завантаження на Nanokvm протягом 10 секунд.',
        reset2: 'Щоб отримати детальні кроки, зверніться до цього документа:',
        reset3: 'Обліковий запис вебінтерфейс за замовчуванням:',
        reset4: 'Обліковий запис SSH за замовчуванням:',
        change1: 'Зверніть увагу, що ця дія змінить наступні паролі:',
        change2: 'Пароль для входу у веб-інтерфейс',
        change3: 'Системний root пароль (пароль для входу в систему по SSH)',
        change4: 'Щоб скинути паролі, натисніть та утримуйте кнопку "Завантаження" на Nanokvm.'
      }
    },
    wifi: {
      title: 'Wi-Fi',
      description: 'Налаштування Wi-Fi для Nanokvm',
      success: 'Будь ласка, перевірте статус мережі NANOKVM та відвідайте нову IP -адресу.',
      failed: 'Операція не вдалася, спробуйте ще раз.',
      confirmBtn: 'Так',
      finishBtn: 'Готово'
    },
    screen: {
      title: 'Екран',
      video: 'Відеорежим',
      videoDirectTips: 'Увімкніть HTTPS у "Налаштування > Пристрій", щоб використовувати цей режим',
      resolution: 'Роздільна здатність',
      auto: 'Автоматично',
      autoTips:
        'Може виникнути розрив зображення або зміщення миші при певних роздільних здатностях. Розгляньте можливість налаштування роздільної здатності віддаленого хоста або вимкнення автоматичного режиму для передачі відеопотоку.',
      fps: 'Кадри в секунду',
      customizeFps: 'Налаштувати',
      quality: 'Якість',
      qualityLossless: 'Без втрат',
      qualityHigh: 'Високий',
      qualityMedium: 'Середній',
      qualityLow: 'Низький',
      frameDetect: 'Виявлення кадрів',
      frameDetectTip:
        'Обчислює різницю між кадрами. Зупиняє передачу відеопотоку, коли на екрані віддаленого хоста не виявлено змін.',
      resetHdmi: 'Перезавантажити HDMI підсистему'
    },
    keyboard: {
      title: 'Клавіатура',
      paste: 'Вставити',
      tips: 'Підтримуються лише стандартні літери та символи клавіатури',
      placeholder: 'Будь ласка, введіть',
      submit: 'Надіслати',
      virtual: 'Клавіатура',
      ctrlaltdel: 'Ctrl+Alt+Del'
    },
    mouse: {
      title: 'Миша',
      cursor: 'Стиль курсору',
      default: 'Курсор за замовчуванням',
      pointer: 'Курсор-стрілка',
      cell: 'Курсор-таблиця',
      text: 'Курсор-текст',
      grab: 'Курсор-захоплення',
      hide: 'Сховати курсор',
      mode: 'Режим миші',
      absolute: 'Абсолютний режим',
      relative: 'Відносний режим',
      requestPointer: 'Використовується відносний режим. Будь ласка, натисніть на робочий стіл, щоб отримати курсор миші.',
      resetHid: 'Скинути HID',
      hidOnly: {
        title: 'Режим лише HID',
        desc: 'Якщо ваша миша та клавіатура перестають відповідати та скинути HID, це не допомагає, це може бути проблемою сумісності між NanoKVM та пристроєм. Спробуйте ввімкнути режим "лише HID" лише для кращої сумісності.',
        tip1: 'Увімкнення режиму "лише HID" демонтує віртуальний U-диск і віртуальну мережу',
        tip2: 'У режимі "лише HID" монтування образів буде вимкнено',
        tip3: 'NANOKVM автоматично перезавантажиться після перемикання режимів',
        enable: 'Увімкнути режим "лише HID"',
        disable: 'Ввимкнути режим "лише HID"'
      }
    },
    image: {
      title: 'Образи',
      loading: 'Завантаження...',
      empty: 'Нічого не знайдено',
      cdrom: 'Встановіть образ в режимі CD-ROM',
      mountFailed: 'Не вдалося змонтувати образ у режимі CD-ROM',
      mountDesc:
        'У деяких системах необхідно витягнути віртуальний диск на віддаленому хості перед монтуванням файлу образа.',
      refresh: 'Оновіть список образів',
      tips: {
        title: 'Як завантажити',
        usb1: "Під'єднайте NanoKVM до вашого комп'ютера через USB.",
        usb2: 'Переконайтеся, що віртуальний диск змонтовано (Налаштування - Віртуальний диск).',
        usb3: "Відкрийте віртуальний диск на вашому комп'ютері та скопіюйте файл зображення до кореневого каталогу віртуального диска.",
        scp1: "Переконайтеся, що NanoKVM і ваш комп'ютер знаходяться в одній локальній мережі.",
        scp2: "Відкрийте термінал на вашому комп'ютері та використовуйте команду SCP для завантаження файлу зображення до каталогу /data на NanoKVM.",
        scp3: 'Приклад: scp ваш-шлях-до-зображення root@ваш-ip-nanokvm:/data',
        tfCard: 'TF карта',
        tf1: 'Цей метод підтримується на системах Linux',
        tf2: 'Отримайте TF карту з NanoKVM (для повної версії, спочатку розберіть корпус).',
        tf3: "Вставте TF карту в кардрідер і під'єднайте її до вашого комп'ютера.",
        tf4: 'Скопіюйте файл зображення до каталогу /data на TF карті.',
        tf5: 'Вставте TF карту в NanoKVM.'
      }
    },
    script: {
      title: 'Скрипти',
      upload: 'Завантажити',
      run: 'Запустити',
      runBackground: 'Запустити у фоновому режимі',
      runFailed: 'Не вдалося запустити',
      attention: 'Увага',
      delDesc: 'Ви впевнені, що хочете видалити цей файл?',
      confirm: 'Так',
      cancel: 'Ні',
      delete: 'Видалити',
      close: 'Закрити'
    },
    terminal: {
      title: 'Термінал',
      nanokvm: 'Термінал NanoKVM',
      serial: 'Термінал послідовного порту',
      serialPort: 'Послідовний порт',
      serialPortPlaceholder: 'Будь ласка, введіть послідовний порт',
      baudrate: 'Швидкість передачі',
      parity: 'Парність',
      parityNone: 'Без парності',
      parityEven: 'Парний',
      parityOdd: 'Непарний',
      flowControl: 'Керування потоком',
      flowControlNone: 'Без керування',
      flowControlSoft: "М'яке керування",
      flowControlHard: 'Жорстке керування',
      dataBits: 'Біти даних',
      stopBits: 'Стопові біти',
      confirm: 'Ок'
    },
    wol: {
      title: 'Wake-on-LAN',
      sending: 'Посилання команди...',
      sent: 'Команду відправлено',
      input: 'Будь ласка, введіть MAC',
      ok: 'Ок'
    },
    download: {
      title: 'Завантажувач образів',
      input: 'Введіть URL-адресу віддаленого образу',
      ok: 'Так',
      disabled: 'Розділ даних /data у режимі лише для читання, тому ми не можемо завантажити образ'
    },
    power: {
      title: 'Живлення',
      showConfirm: 'Підтвердження',
      showConfirmTip: 'Енергетичні операції потребують додаткового підтвердження',
      reset: 'Скидання',
      power: 'Живлення',
      powerShort: 'Живлення (коротке натискання)',
      powerLong: 'Живлення (довге натискання)',
      resetConfirm: 'Продовжити роботу зі скиданням?',
      powerConfirm: 'Продовжувати роботу живлення?',
      okBtn: 'Так',
      cancelBtn: 'Ні'
    },
    settings: {
      title: 'Налаштування',
      about: {
        title: 'Про NanoKVM',
        information: 'Інформація',
        ip: 'IP',
        mdns: 'mDNS',
        application: 'Версія додатка',
        applicationTip: 'Версія веб-додатка NanoKVM',
        image: 'Версія образу',
        imageTip: 'Версія системного образу NanoKVM',
        deviceKey: 'Ключ пристрою',
        community: 'Спільнота',
        hostname: "Ім'я вузла",
        hostnameUpdated: "Ім'я вузла оновлено. Перезавантажте систему, щоб застосувати зміни.",
        ipType: {
          Wired: 'Дротове',
          Wireless: 'Бездротове',
          Other: 'Інший'
        }
      },
      appearance: {
        title: 'Зовнішній вигляд',
        display: 'Відображення',
        language: 'Мова',
        menuBar: 'Панель меню',
        menuBarDesc: 'Піктограми відображення в панелі меню',
        webTitle: 'Веб-назва',
        webTitleDesc: 'Налаштуйте назву веб-сторінки'
      },
      device: {
        title: 'Пристрій',
        oled: {
          title: 'OLED-екран',
          description: 'Автоматичне відключення OLED-екрана',
          0: 'Ніколи',
          15: '15 сек',
          30: '30 сек',
          60: '1 хв',
          180: '3 хв',
          300: '5 хв',
          600: '10 хв',
          1800: '30 хв',
          3600: '1 година'
        },
        wifi: {
          title: 'Wi-Fi',
          description: 'Налаштування Wi-Fi',
          setBtn: 'Конфігурація'
        },
        ssh: {
          description: 'Увімкніть віддалений доступ по SSH',
          tip: 'Перед ввімкненням встановіть надійний пароль (Обліковий запис - Зміна пароля)'
        },
        tls: {
          description: 'Увімкнути протокол HTTPS',
          tip: 'Будьте в курсі: Використання HTTPS може збільшити затримку, особливо в режимі відео MJPEG.'
        },
        advanced: 'Розширені налаштування',
        swap: {
          title: 'Swap (файл підкачки)',
          disable: 'Відключено',
          description: 'Встановіть розмір файлу свопу',
          tip: "Увімкнення цієї опції може вивести з ладу SD карту!"
        },
        mouseJiggler: {
          title: 'Налаштування пацюка',
          description: 'Не дозволяйте віддаленому хосту спати',
          disable: 'Відключено',
          absolute: 'Абсолютний режим',
          relative: 'Відносний режим'
        },
        mdns: {
          description: 'Увімкнути службу MDNS Discovery',
          tip: "Вимкнути, якщо це не потрібно"
        },
        hidOnly: 'Режим лише HID',
        disk: 'Віртуальний диск',
        diskDesc: 'Монтувати віртуальний U-диск на віддаленому хості',
        network: 'Віртуальна мережа',
        networkDesc: 'Встановити віртуальну мережеву карту на віддаленому хості',
        reboot: 'Перезавантажити',
        rebootDesc: 'Ви впевнені, що хочете перезавантажити Nanokvm?',
        okBtn: 'Так',
        cancelBtn: 'Ні'
      },
      tailscale: {
        title: 'Tailscale',
        memory: {
          title: "Оптимізація пам'яті",
          tip: "Коли використання пам’яті перевищує обмеження, збирання сміття проводиться більш агресивно, щоб спробувати звільнити пам’ять. Рекомендується встановити 50 Мб, якщо використовувати Tailscale. Після зміни налаштувань потрібно перезавантажити Tailscale.",
          disable: 'Відключено'
        },
        restart: 'Ви впевнені, що бажаєте перезавантажити Tailscale?',
        stop: 'Ви впевнені, що бажаєте зупинити Tailscale?',
        stopDesc: 'Вийдіть з Tailscale і вимкніть автоматичний запуск при завантаженні.',
        loading: 'Завантаження...',
        notInstall: 'Tailscale не знайдено! Будь ласка, встановіть його.',
        install: 'Встановити',
        installing: 'Встановлення',
        failed: 'Не вдалося встановити',
        retry: 'Будь ласка, оновіть сторінку та спробуйте ще раз. Або спробуйте встановити вручну',
        download: 'Завантажте',
        package: 'пакет встановлення',
        unzip: 'та розпакуйте його',
        upTailscale: 'Завантажте Tailscale до каталогу /usr/bin/ на NanoKVM',
        upTailscaled: 'Завантажте Tailscaled до каталогу /usr/sbin/ на NanoKVM',
        refresh: 'Оновіть поточну сторінку',
        notLogin:
          "Пристрій ще не прив'язаний. Будь ласка, увійдіть і прив'яжіть цей пристрій до вашого облікового запису.",
        urlPeriod: 'Ця URL-адреса дійсна протягом 10 хвилин',
        login: 'Увійти',
        loginSuccess: 'Успішний вхід',
        enable: 'Увімкнути Tailscale',
        deviceName: 'Назва пристрою',
        deviceIP: 'IP пристрою',
        account: 'Обліковий запис',
        logout: 'Вийти',
        logoutDesc: 'Ви впевнені, що хочете вийти?',
        uninstall: 'Видалити Tailscale',
        okBtn: 'Так',
        cancelBtn: 'Ні'
      },
      update: {
        title: 'Перевірити оновлення',
        queryFailed: 'Не вдалося отримати версію',
        updateFailed: 'Оновлення не вдалося. Будь ласка, спробуйте ще раз.',
        isLatest: 'У вас вже остання версія.',
        available: 'Доступне оновлення. Ви впевнені, що хочете оновити?',
        updating: 'Оновлення розпочато. Будь ласка, зачекайте...',
        confirm: 'Підтвердити',
        cancel: 'Скасувати',
        preview: 'О бета релізах',
        previewDesc: 'Отримайте ранній доступ до нових функцій та вдосконалень',
        previewTip:
          'Будь ласка, майте на увазі, що випуски бета релізів можуть містити помилки або неповну функціональність!'
      },
      account: {
        title: 'Обліковий запис',
        webAccount: "Ім'я облыкового запису у веб-інтерфейсі",
        password: 'Пароль',
        updateBtn: 'Зміна',
        logoutBtn: 'Вийти',
        logoutDesc: 'Ви впевнені, що хочете вийти?',
        okBtn: 'Так',
        cancelBtn: 'Ні'
      }
    },
    error: {
      title: "Ми зіткнулися з проблемою",
      refresh: 'Оновити'
    },
    fullscreen: {
      toggle: 'Перемикатися на повному екрані'
    },
    menu: {
      collapse: 'Згорнути меню',
      expand: 'Розгорнути меню'
    }
  }
};

export default uk;
