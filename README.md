React PTO
============

## Based off of the [js-seed project](https://github.com/megalithic/js-seed)

***Please refer to the aforementioned project above for setup notes***

For the lazy (TL;DR): `npm install`

This app requires certain services to run, you should know what they
are, if you have worked on a similar app.

To get around the CORS issues, symlink the build directory to your jboss
deployments folder as a war:

```sh
ln -s <thisrepo>/build <jbossdeployment>/miniest.war
touch <jbossdeployment>/miniest.war.dodeploy
```
