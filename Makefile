
## 	https://stackoverflow.com/questions/30286498/change-working-directory-for-npm-scripts npm usage
gen-hardhat:
	mkdir "$(PWD)/w2-1/"
	cd "$(PWD)/w2-1/" && 	\
	npm init && npm install --save-dev hardhat && \
	npx hardhat
	popd
	