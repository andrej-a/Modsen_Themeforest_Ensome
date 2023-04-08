# Modsen_Themeforest_Ensome

MODSEN test task.

## Tестовое задание Modsen Themeforest Ensome

## Содержание

- [Modsen\_Themeforest\_Ensome](#modsen_themeforest_ensome)
  - [Tестовое задание Modsen Themeforest Ensome](#tестовое-задание-modsen-themeforest-ensome)
  - [Содержание](#содержание)
  - [Техническое задание](#техническое-задание)
  - [Используемые технологии](#используемые-технологии)
  - [Необходимый функционал:](#необходимый-функционал)
  - [Дополнительный функционал](#дополнительный-функционал)
    - [Пример графического представления:](#пример-графического-представления)
    - [Также проект предполагает:](#также-проект-предполагает)
  - [Описание экранов](#описание-экранов)
  - [Полезные ссылки](#полезные-ссылки)

## Техническое задание

Необходимо реализовать React приложение "Modsen Themeforest" по предоставленному дизайну из Figma.

## Используемые технологии

-   **_yarn_** - менеджер пакетов.
-   **_TS_** - инструмент строгой типизации
-   **_react-router-dom_** - инструмент управления состоянием.
-   **_email-js_** - библиотека позваляющая отправлять электонные письма на почту
-   **_styled-components_** - система стилизации react компонентов.
-   **_cypress_** - e2e тестирование для React приложений.
-   **_yup_** - библиотека для валидации форм
-   **_paypal-js_** - библиотека для подключения PayPal

## Необходимый функционал:

Приложение должно предоставлять возможность:

-   отправку писем на электронную почту
-   просмотра видео на страницах приложения
-   реализация оплаты через paypal
-   elastic search
-   infinity scroll
-   просмотра интерактивной карты
-   смены языка (продумать самостоятельно)

## Дополнительный функционал

-   Развернуть приложение на хостинге (heroku, vercel)
-   Настроить CI/CD, используя [GitHub Actions](https://github.com/features/actions).
-   Собрать проект с нуля(с настройками всех конфигов: webpack, eslint, prettier, husky и тд.)

### Пример графического представления:

Ссылка на макет: [Макет "Modsen Themeforest"](<https://www.figma.com/file/RH6Tg2icMlc7M2DdHEJ9Bl/Themeforest-Modsen-Template-(Community)?node-id=236%3A74554>).

### Также проект предполагает:

-   Организацию файловой структуры описанной в [structure](https://github.com/mkrivel/structure).
-   Обработку ошибок через паттерн _"Error Boundaries"_.
-   Использование TypeScript для типизирования и уменьшения количества потенциальных багов.
-   Использование алиасов для импортирования файлов.
-   Реализация должна быть выполнена без использования UI библиотек.
-   Обязательная валидация всех текстовых полей с использованием _yup_.
-   Оптимизацию дизайна под мобильные устройства.
-   Пагинацию больших списков.
-   Покрытие тестами всего приложения (cypress, jest, ...).
-   Создание UI библиотеки компонентов, используя storybook. Пример того, что можно [вынести в библиотеку](https://www.figma.com/file/RH6Tg2icMlc7M2DdHEJ9Bl/Themeforest-Modsen-Template?node-id=236%3A74554&t=dbIQqFSL1WWUpRiq-0)
-   Обязательную анимацию при наведения, нажатии на кнопки, прокрутки карусели и слайдеров, появлении элементов на странице при рендере и скролле.
-   Творчество в контекте анимации, помимо обязательной выше, приветсвуется.

## Описание экранов

1. [Главная страница](<https://www.figma.com/file/RH6Tg2icMlc7M2DdHEJ9Bl/Themeforest-Modsen-Template-(Community)?node-id=255%3A18588>).

Главная страница как и все остальные включают в себя верхний блок, который предполагает реализацию перехода между страницами и при нажатии на кнопку "Watch the demo" - открытие модального окна, в котором проигрывается видео (видео выбирается выполняющим).

Страница включает в себя разбивку на несколько блоков:

В блоке "Find true power..." при нажатии на кнопку "Learn more" должен быть переход на страницу Services.

В блоке "The newest business..." при нажатии на кнопку "Discover more" должен быть переход на страницу Solutions.

В блоке "Radically new solutions..." при нажатии на кнопку "Discover more" должен быть переход на страницу Solutions.

Блок "Testimonials" имеет горизонтальный список включающий в себя по 3 карточки с отзывами и возможность навигации на следующую страницу списка с использованием двух стрелок навигации.

В блоке "Our pricing" при нажатии на одну из кнопок "Get started" должно открываться модальное окно с краткой сводкой о тарифе, его название и стоимость, а также возможность оплаты с помощью PayPal.

В блоке "Our blog" реализован список новостей и возможность навигации на следующую страницу списка с использованием двух стрелок навигации, также при нажатии на кнопку "Read more" должен быть переход на страницу [полного описания записи](<https://www.figma.com/file/RH6Tg2icMlc7M2DdHEJ9Bl/Themeforest-Modsen-Template-(Community)?node-id=255%3A24521>).

В блоке "Do you need help" при нажатии на кнопку "Contact us" должен быть переход на страницу [Страница Contacts](<https://www.figma.com/file/RH6Tg2icMlc7M2DdHEJ9Bl/Themeforest-Modsen-Template-(Community)?node-id=255%3A26942>).

В блоке "Subscribe to our newsletter" должна быть реализовна форма отправки сообщения на электонную почту выполняющего.

2. [Страница Services](<https://www.figma.com/file/RH6Tg2icMlc7M2DdHEJ9Bl/Themeforest-Modsen-Template-(Community)?node-id=255%3A20964>).

При переходе к описанию любого из сервиса в блоке "Data Analytics Services", должно открываться его [полное описание](https://www.figma.com/file/RH6Tg2icMlc7M2DdHEJ9Bl/Themeforest-Modsen-Template?node-id=9720%3A4621&t=E5jLJrRvgTV1hVLr-0). На странице описания представлена общая информация о сервисе, в форме "Search" можно найти нужный сервис и перейти на его страницу с описанием. В блоке с категориями при разворачивании нужного блока можно увидеть его ключевое описание. Форма "Contact information" отправляет письмо на введенную почту. Также на странице Services присутствуют блоки "Contact Us" и "Subscribe to our newsletter".

3. [Страница About us](<https://www.figma.com/file/RH6Tg2icMlc7M2DdHEJ9Bl/Themeforest-Modsen-Template-(Community)?node-id=255%3A23264>). Логика блока "What our customers say" должна быть аналогична той, что и на главной странице в блоке "Testimonials ". При нажатии на одну из карточек в этом блоке должен осуществляться переход к [полному описанию блога](<https://www.figma.com/file/RH6Tg2icMlc7M2DdHEJ9Bl/Themeforest-Ensome-Modsen-(Community)?node-id=255%3A24521>). Также на странице должна быть реализована форма отправки сообщения на введенную почту, в сообщении должны использоваться веденные данные с формы (имя, тема сообщения, текст сообщения). На странице также присутствуют 2 блока "Subscribe to our newsletter", которые имеют логику, которая используется на главной странице.

4. [Страница Blog](<https://www.figma.com/file/RH6Tg2icMlc7M2DdHEJ9Bl/Themeforest-Modsen-Template-(Community)?node-id=255%3A24519>). Данная страница состоит из сетки новостей к каждой из которой привязан тег, при нажатии на "Read more" открывается [описание новости](https://www.figma.com/file/RH6Tg2icMlc7M2DdHEJ9Bl/Themeforest-Modsen-Template?node-id=255%3A24521&t=E5jLJrRvgTV1hVLr-0). При нажатии на More articles список увеличивается на 9 новостей, если новостей больше нет, то кнопка исчезает.

На странице описания выбранной новости в блоке Popular posts отображаются 4 популярные новости по количеству просмотров с тем же тегом, что и просматриваемая новость. В блоке Related Posts отображается 3 новости хотя бы с одним тегом, которая имеет просматриваемая новость.

В форме "search" нужно реализовать поиск постов по введенному тегу и в блоке "Popular posts" появляется список постов уже с новым тегом. Также в этом блоке список постов меняется, если выбирается тег в блоке "Tags".

При нажатии на пост в блоке "Popular posts" меняется основное содержимое статьи и обновляются посты в блоке "Related Posts".

5. [Страница Contacts](<https://www.figma.com/file/RH6Tg2icMlc7M2DdHEJ9Bl/Themeforest-Modsen-Template-(Community)?node-id=255%3A26942>). Данная страница хранит в себе форму для связи, которая отправляется на почту (выбранную выполняющим) с заранее заготовленным текстом. Карта является интерактивной, на которой отображаются точки (минимум 3) удаленные друг от друга (точки определяет выполняющий, но они должны быть расположены в разных странах).

6. [Страница Our team](<https://www.figma.com/file/RH6Tg2icMlc7M2DdHEJ9Bl/Themeforest-Modsen-Template-(Community)?node-id=255%3A27792>).

Данная страница состоит из двух модулей: список людей из команды и их [описание](https://www.figma.com/file/RH6Tg2icMlc7M2DdHEJ9Bl/Themeforest-Modsen-Template?node-id=9733%3A4556&t=E5jLJrRvgTV1hVLr-0). Минимальное количество членов в команде 9, если их больше то оставшиеся подгружаются с импользованием Infinity scroll по 9 человек. На странице описания члена команды присутсвует форма которая отправляет письмо на почту. Также на данной странице должны присутсвовать кнопки социальных сетей, которые переводят на страницу человека в соц сети (для упрощения можно использовать ссылки на не связанных людей, но главное чтобы для каждого члена ссылки уникальные). На двух страницах реализован блок "Subscribe to our newsletter".

7. [Страница FAQs](<https://www.figma.com/file/RH6Tg2icMlc7M2DdHEJ9Bl/Themeforest-Modsen-Template-(Community)?node-id=255%3A28995>). Данная страница содержит в себе расширяемые, при нажатии на "+", блоки, которые содержат в себе ответ на вопрос и "сворачиваются" при нажатии на элемент "-", который появляется, когда блок развернут. Также на странице присутсвует блоки "Do you need help?" и "Subscribe to our newsletter".

8. [Страница Solutions](https://www.figma.com/file/RH6Tg2icMlc7M2DdHEJ9Bl/Themeforest-Modsen-Template?node-id=255%3A30126&t=DhYz0QuTWMKS5F90-0). На странице представлены карточки с описанием решений, при нажатии на "Read More" должна открываться страница с [описанием каждого из решений](https://www.figma.com/file/RH6Tg2icMlc7M2DdHEJ9Bl/Themeforest-Modsen-Template?node-id=9734%3A4758&t=E5jLJrRvgTV1hVLr-0). Блок "Testimonials" содержит слайдер, который имеет такую же реализацию, как и на главной странице. На странице описания присутствует зафиксированный блок содержания заголовков, которые активируются при скроллинге страницы. На двух страницах присутсвуют блоки "Do you need help?" и "Subscribe to our newsletter".

Описание табов: выбор иконок для табов остается на усмотрение выполняющего (также можно использовать иконки представленные на дизайне) и представляют из себя следующее (слева на право): Главный экран с кнопкой добавления товара и поделиться товаром, профиль пользователя, список пользователя

## Полезные ссылки

[React](https://reactjs.org/docs/getting-started.html)

[React hooks](https://reactjs.org/docs/hooks-intro.html)

[React router dom](https://reacttraining.com/react-router/web/guides/quick-start)

[React redux](https://react-redux.js.org/introduction/quick-start)

[Тестирование Cypress](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell)

[Email-js](https://www.emailjs.com/docs/examples/reactjs/)

[Styled-components](https://www.styled-components.com/docs)

[Yup](https://www.npmjs.com/package/yup)

[Paypal](https://developer.paypal.com/docs/checkout/standard/customize/single-page-app/)

[Storybook](https://dev.to/iamrishupatel/how-to-create-a-react-component-library-using-storybook-typescript-scss-and-rollup-4pin)

[i18next](https://react.i18next.com/)

[GitHub Actions](https://github.com/features/actions)

[Heroku](https://devcenter.heroku.com/articles/heroku-cli)
