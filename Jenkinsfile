node{
    def git_last_hash = ""
    stage('pull source project'){        
        git credentialsId: 'username-password-gitlab-bom43531', url: 'https://gitlab.com/brombom43531/letvote-backend.git'        
        sh 'ls'
        sh 'pwd'
    }

    stage('get last git hash'){        
        git_last_hash = sh(returnStdout: true, script: 'git rev-parse HEAD | cut -c1-8').trim()
        echo git_last_hash
    }

    stage('run unit test'){
        def build = docker.image('backend:0.0.1')
        sh "mv config.json config.tmp"
        sh "sed 's/REPLACE_GIT_LAST_HASH/$git_last_hash/g' config.tmp > config.json"        
        sh 'pwd && ls'
        build.inside {
            sh 'pwd'     
            sh 'ls'            
            sh 'npm run test'
        }
    }

    stage('Analyze Code'){
        echo "todo"
    }

    stage('Pack Project'){
        echo "todo"
    }

    stage('run e2e test'){
        echo "todo"
    }

    stage('deploy'){
        echo "todo"
    }
}