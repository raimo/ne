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
