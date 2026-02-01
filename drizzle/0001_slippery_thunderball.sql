CREATE TABLE `submissions` (
	`id` int AUTO_INCREMENT NOT NULL,
	`type` enum('sponsor_inquiry','team_registration','contact') NOT NULL,
	`name` varchar(255) NOT NULL,
	`email` varchar(320) NOT NULL,
	`company` varchar(255),
	`message` text NOT NULL,
	`sponsorshipTier` varchar(64),
	`teamSize` int,
	`projectCategory` varchar(255),
	`status` enum('new','contacted','converted') NOT NULL DEFAULT 'new',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `submissions_id` PRIMARY KEY(`id`)
);
