# |  SIH App
### Welcome to Smart India Hackathone dev team!


##### Make sure to read all the guidelines before start working



## | Index: 

1. Installing the app on your machine
2. Running the app on your machine
3. Contribution rules
---



## 1. Installing The App On Your Machine


1.1.	Open the terminal, go to the folder where you want **sih** repository to be installed and run:
`git clone https://github.com/YOUR_USERNAME/smart-india-hackathon.git` (Only Your particular USER_NAME will be allowed to do so, as this is the private repo)

*(replace `YOUR_USERNAME` by your github username)*

1.2.	Go to `sih/` folder and run `npm install`.

1.3.	Go to `sih/public/` folder and run `npm install`.

1.4.	Still in `sih/public/` folder, run `ng build` or run `ng serve` to serve the app on port 3000 and 4200 respectively.

1.5.	Run `nodemon server` to start the server in the `sih/` main dir.


## 2. Running The App On Your Machine

###### (You must have MongoDB installed on your machine, [check here to see how to install](https://docs.mongodb.com/manual/installation/).) 


2.1.	Start MongoDB with `mongod` command or, `mongod --dbpath PATH_TO_YOUR_DATA_DB_FOLDER` passing the path to default MongoDB data folder.

2.2.	Go to `sih/` folder and run `nodemon server`  command.

2.3.1 Go to `sih/public/` folder and run `ng serve`  command to serve on `localhost:4200`.

2.3.1	Go to `sih/public/` folder and run `ng build`  command to serve on `localhost:3000`.

---


## 3. Contribution Rules


### ✔️ Never work on `master` branch!


### ✔️ Create a new branch for each set of related bugs or set of related tasks, naming by:

####  `type_CapitalizedName`, example: `bugfix_DashBoardCSS`.


*(**types:** `bugfix`, `feature`)*


**💻 *command:*** `git checkout -b bugfix_DashBoardCSS`


**⚠️ Important: **

* Before creating a branch, check if someone already started to work on this task and if there's already a branch created for this task, and if there is, **please fetch the branch with the command**:

  **💻 *command:*** `git fetch origin bugfix_DashBoardCSS:bugfix_DashBoardCSS`

* Right after creating a new branch, push it to remote to make it available for everyone, defining the upstream.

  **💻 *command:*** `git push -u origin bugfix_DashBoardCSS`


### ✔️ BEFORE start working, pull the remote branch updates to your local branch.


**⚠️ Important:** *make sure you're on the correct branch...*

**💻 *command:*** `git checkout bugfix_DashBoardCSS`

*... and run ...*

**💻 *command:*** `git pull`


### ✔️ AFTER working, push your local branch updates to remote branch.


**⚠️ Important:** *make sure you're on the correct branch...*

**💻 *command:*** `git checkout bugfix_DashBoardCSS`

*... and run ...*

**💻 *command:*** `git push`


### ✔️ *"... Ok! ... I've finished the task, what now? ..."* 


##### *...Please follow these rules to have your work ready to deploy:*


##### **1. Update your local `master` branch and rebase the branch you was working:**

1.1. Checkout to master:

`git checkout master`

1.2. Pull the updates:

`git pull`

1.3. Checkout to the branch you was working on:

`git checkout bugfix_DashBoardCSS`

1.4. Rebase this branch:

`git rebase master`


**⚠️ Important:** 

*If there are more people working on this branch, let them know you're rebasing.*

*Conflicts may occur, and it must be resolved on this branch!*

*The developer is responsible to resolve conflicts and test it on the current branch to make sure the branch is ready and safe to be merged!*


##### **2. Test the app and your work again!**


##### 3. Go to GitHub and open a Pull Request, then we will finish the job and deploy!


**⚠️ Important:** 

*Let people know you're opening this pull request.*


**⚠️ Tip:** 

If you finished working on this branch forever, and you've noticed that the branch was  already closed on remote, it makes sense to delete this branch locally:

`git branch -d bugfix_FormatPostContent`
&
`git branch -D bugfix_FormatPostContent`


### ✔️ Are you going back to work on a branch you've created some time ago? Let's make it ready to work again!


##### 1. Make sure your `master` branch is updated:

`git checkout master`

`git pull`


##### 2. Update this branch you're gonna work (someone could've been working on this branch):

`git checkout feature_ThatOldFeature`

`git pull`


##### 3. Rebase the branch you're getting back to work:

`git checkout feature_ThatOldFeature`

`git rebase master`


**⚠️ Important:** 

*If there's more people working on this branch, let them know you're rebasing.*

*Conflicts may occur, and it must be resolved right now, before you get back working on the feature!*


##### 4. Push this updated branch state to remote:

`git push`

##### *... and then you're good to go!*

---

