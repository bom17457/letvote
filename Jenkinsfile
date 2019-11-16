node{
    def git_last_hash = ""
    def address = "http://18.136.212.248:3000/"
    stage('pull source project'){        
        git credentialsId: 'username-password-gitlab-bom43531', url: 'https://gitlab.com/brombom43531/letvote-backend.git'        
    }

    stage('get last git hash'){        
        git_last_hash = sh(returnStdout: true, script: 'git rev-parse HEAD | cut -c1-8').trim()
        echo git_last_hash
    }

    stage('run unit test'){
        def unit = docker.image('backend:0.0.6')        

        sh "mv config.json config.tmp"
        sh "sed 's/REPLACE_GIT_LAST_HASH/$git_last_hash/g' config.tmp > config.json"        
        sh "cat config.json"        
        unit.inside('-e "NODE_ENV=test"') {       
            sh 'touch test.db'           
            sh '\cp -r ../node_modules .' 
            sh 'npm run test'
        }
    }

    stage('build'){
        def build = docker.image('backend:0.0.6')

        build.inside('-e "NODE_ENV=test"'){
            sh 'pkg -t node12-alpine-x64 ./bin/www -c package.json --output letvote-backend'
        }        

        docker.withRegistry('https://registry.gitlab.com/brombom43531/letvote-backend', 'username-password-gitlab-bom43531'){
            def create_image = docker.build("registry.gitlab.com/brombom43531/letvote-backend:$git_last_hash", '-f Dockerfile.prod.base .')
            create_image.push()
        }
    }

    stage('deploy'){                
        sh "sed 's/REPLACE_GIT_LAST_HASH/$git_last_hash/g' docker-compose.base > docker-compose.yml"
        sh "scp ./docker-compose.yml ubuntu@18.136.212.248:~/docker-compose.yml"
        sh 'ssh ubuntu@18.136.212.248  "cd ~/; docker-compose down || true; docker-compose up -d"'        
        sh "curl -X POST -H 'Authorization: Bearer QMz1lANoiKims7nHiNq5Rja9nORS73ZBfOwX6Qk3eZe' -F 'message=Deploy Success. Click for review http://165.22.245.142/job/letvote-backend/$currentBuild.number/' https://notify-api.line.me/api/notify"
    }    
    
    stage('run e2e test'){
        def test = docker.image('e2e:0.0.1')        
        test.inside {
            sh "mv test/apiTest/Common.robot test/apiTest/Common.robot.tmp"
            sh "sed 's/localhost:3000/api.letvote.wtf/g' test/apiTest/Common.robot.tmp > test/apiTest/Common.robot"
            sh 'robot test/apiTest/Common.robot'
        }
    }
}
