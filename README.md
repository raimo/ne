```bash
# Install Linuxbrew (replace with homebrew for Mac)
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/linuxbrew/go/install)"

# Add to your shell too
export PATH="$HOME/.linuxbrew/bin:$PATH"

# Install system dependencies
brew update
brew bundle

# Setup JAVA_HOME
export JAVA_HOME=$(find $HOME/.linuxbrew/Cellar/jdk/ -mindepth 1 -maxdepth 1)

# Install Node dependencies
npm install
```

Read about embedded Neo4j: https://github.com/joewhite86/node-neo4j-embedded

### Already done Neo4j import from Wikipedia: https://github.com/mirkonasato/graphipedia

After downloading pages-articles-*bz2:
```
bzip2 -dc pages-articles.xml.bz2 | java -classpath graphipedia-dataimport.jar org.graphipedia.dataimport.ExtractLinks - enwiki-links.xml
java -Xmx3G -classpath graphipedia-dataimport.jar org.graphipedia.dataimport.neo4j.ImportGraph enwiki-links.xml graph.db
```
