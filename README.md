# Starter Proj

## steps to setup

\$ git clone git@github.com:jimibue/react-rails-router-starter-f20.git <project-name>

\$ cd project-name

\$ bundle install

in database.yml change name of database react_rails_router_starter_f20 to project-name

\$ rails db:create db:migrate db:seed

\$ rails s -p 3001

\$ cd client && yarn

\$ yarn start

handle git
you can either remove the remote and add you own, or you can remove the git repo, remove the remote keeps the commit history from starter project, and rm -rf .git is going to complete remove it/

remove origin \$ git remote rm origin
git add remote origin to new repo

or \$ rm -rf .git git init git remote add origin new githib page git add . git commit -m git push origin master
