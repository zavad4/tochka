# tochka - специфікація 
## 1. Контекст
Проект реалізовується командою програмістів під назвою tochka. Метою проекту є створення зручного інтернет-магазину, який буде готовий до використання в реальному житті.

Технологічний стек:
- Frontend: JavaScript (React.js)
- Backend: JavaScript (Node.js)
- Database: PostgreSQL

Команда:
- [Рожицький Максим](https://github.com/Maksym1910)
- [Заводовська Єлізавета](https://github.com/zavad4)
- [Зегельман Марк](https://github.com/zemark-prog)
- [Марченко Максим](https://github.com/kertnique)

## 2. Задачі
У рамках проекту будуть вирішені такі питання: 
1. Реалізація реєстрації (відповідно і авторизації) користувача.
2. Зручний пошук товарів (завдяки різноманітним фільтрам, можливості сортування).
3. Реалізація корзини та її функціонування. 
4. Зв'язок з техпідтримкою.

Вирішення цих задач призведе до створення привабливого та простого у використанні інтернет-магазину.

Функція "залишити відгук" для зареєстрованих користувачів не передбачена і залишається поза скоупом даного проекту.
Оскільки технологія телепорту ще недосконала, реалізовувати його не будемо.

## 3. Функціональні вимоги
1. Реєстрація користувача.
2. Авторизація користувача.
3. Пошук товарів. 
4. Оформлення замовлення.
5. Можливість додавання товарів у корзину.
6. Фільтрування переліку товарів. 
7. Сортування переліку товарів.
8. Зв'язок з техпідтримкою.

## 4. Сценарії
#### 4.1 Реєстрація користувача
 1. Користувач відкриває реєстраційну форму та заповнює її (ім'я, прізвище, е-майл, пароль та його підтвердження).
 2. Якщо дана електронна пошта існує, то:
    - на пошту відправляється лист-підтвердження реєстрації;
    - вже авторизований користувач переноситься на початкову сторінку застосунку.
#### 4.2 Авторизація користувача
 1. Користувач відкриває та заповнює форму для авторизації (е-майл та пароль).
 2. Якщо користувач з такими даними існує, то авторизований користувач переноситься на початкову сторінку застосунку.
#### 4.3 Додавання товарів у корзину
 1. Авторизований користувач проводить пошук потрібного йому товару (за допомогою пошукового рядка, фільтрування та сортування товарів).
 2. Якщо товар сподобався користувачеві, то він відкриває сторінку даного товару.
 3. Якщо користувач хоче додати товар у корзину, то він натискає на кнопку "Додати до корзини".
 4. Даний товар додається до корзини, а користувач залишається на поточній сторінці.
#### 4.4 Здійснення замовлення
 1. Авторизований користувач заходить на сторінку своєї корзини  натисненням на кнопку "Корзина".
 2. Користувач обирає один або більше товарів зі списку, які він хоче замовити.
 3. Користувач заповнює форму замовлення, що відкрилась перед ним (е-майл, пароль, адреса доставки).
 4. Якщо е-майл та пароль збігаються з даними користувача, то:
    - на електронну пошту відправляється лист з даними замовлення;
    - користувач переноситься на початкову стрінку застосунку;
    - Товари, обрані для замовлення зникають з корзини.
