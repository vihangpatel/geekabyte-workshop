######################### SETUP VISUAL STUDIO CODE AND EXTENSIONS #########################

cred=`tput setaf 1`
green=`tput setaf 2`
yellow=`tput setaf 3`
reset=`tput sgr0`
bold=$(tput bold)

#mkdir .vscode if needed
mkdir .vscode

# Copy settings from the repo to user settings directory
cp ./IDE/settings.json ./.vscode/settings.json
echo "${green}${bold}Successfully copied editor settings ...${reset}\n\n"

echo "${green}${bold}Installing extensions ... ${green}( Will be ignored if already installed ) ${reset}\n\n\n"

# Install extensions in VS Code parallaly
code --install-extension EditorConfig.EditorConfig &
code --install-extension HookyQR.beautify &
code --install-extension SintrumIT.theme-oceanic-next-italic &
code --install-extension Zignd.html-css-class-completion &
code --install-extension dbaeumer.vscode-eslint &
code --install-extension dbalage.vscode-stylesheet-formatter &
code --install-extension dzannotti.vscode-babel-coloring &
code --install-extension eamodio.gitlens &
code --install-extension esbenp.prettier-vscode &
code --install-extension joelday.docthis &
code --install-extension michelemelluso.code-beautifier &
code --install-extension mohsen1.prettify-json &
code --install-extension mrmlnc.vscode-doiuse &
code --install-extension msjsdiag.debugger-for-chrome &
code --install-extension sandcastle.whitespace &
code --install-extension shinnn.stylelint &
code --install-extension taichi.react-beautify &
code --install-extension zhuangtongfa.Material-theme &

