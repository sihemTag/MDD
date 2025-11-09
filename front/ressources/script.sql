CREATE TABLE `USERS` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `email` varchar(255) UNIQUE,
  `name` varchar(255),
  `password` varchar(255),
  `created_at` timestamp,
  `updated_at` timestamp
);

CREATE TABLE `ROLES` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255)
);

CREATE TABLE `USER_ROLES` (
  `user_id` INTEGER,
  `role_id` INTEGER,
  PRIMARY KEY (`user_id`, `role_id`),
  FOREIGN KEY (`user_id`) REFERENCES `USERS` (`id`) ON DELETE CASCADE,
  FOREIGN KEY (`role_id`) REFERENCES `ROLES` (`id`) ON DELETE CASCADE
);

CREATE TABLE `ARTICLE` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `title` varchar(255) UNIQUE,
  `description` varchar(255),
  `created_at` timestamp,
  `updated_at` timestamp,
   FOREIGN KEY (`owner_id`) REFERENCES `USERS` (`id`) ON DELETE CASCADE,
);

CREATE TABLE comment (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `artical_id` INT NOT NULL,
    `user_id` INT NOT NULL,
    `comment` TEXT,
    `created_at` DATETIME,
    `updated_at` DATETIME,
    CONSTRAINT fk_comment_article FOREIGN KEY (artical_id) REFERENCES article(id),
    CONSTRAINT fk_comment_user FOREIGN KEY (user_id) REFERENCES user(id)
);

CREATE TABLE abonnement (
    `id` INT AUTO_INCREMENT PRIMARY KEY,               
    `theme_id` INT NOT NULL,                             
    `user_id` INT NOT NULL,                               
    FOREIGN KEY (theme_id) REFERENCES theme(id),       
    FOREIGN KEY (user_id) REFERENCES users(id)         
);