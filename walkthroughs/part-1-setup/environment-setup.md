# Environment Setup

## Prerequisites

Please read `intro-walkthrough.md` first!

## Getting Started

Here, you’ll set up your environment you’ll need for web development.

## Issues

**You will likely encounter some errors during the setup portions of this section**. Please reach out to me over Slack if you have any issues!

## Java 8

Before you continue, set your default Java version to Java 8.

### Check version

To make sure you're using the correct version of Java, run these commands:

```bash
echo $JAVA_HOME
java -version
```

If these commands print a version like `1.8.0_xxx`, then you're good to go!

### If not using Java 8:

Download JDK 8 [here](https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html) and run the installer.

Open your `.bashrc` file by running this command:

```bash
edit ~/.bashrc
```

macOS users should set their `.bash_profile` files instead:

```bash
edit ~/.bash_profile
```

This file sets up your console configuration. Add this line into the end of
that file, changing `(path to Java home)` accordingly:

```
export JAVA_HOME=(path to Java home)
```

**macOS**: Look inside `/Library/Java/JavaVirtualMachines/`.

**Linux**: Look inside `/usr/lib/jvm/`.

**Windows**: Look inside `C:`\`Program Files`\`Java`.

Look for a `1.8.0_xxx` folder inside your OS’s folder, then navigate to `/Contents/Home`. Copy the full path. It should look like `/(OS path)/jdk1.8.0_xxx.jdk/Contents/Home`, where `xxx` is your Java 8’s minor version.

For example, it would be `/Library/Java/JavaVirtualMachines/jdk1.8.0_xxx.jdk/Contents/Home` on macOS.

Save and close the `.bashrc` or `.bash_profile` file and restart your command line.

Verify your Java version again.

## Apache Maven

You’ll need to install Maven as well. To check if it is installed, run `mvn -v` and see if there is proper output.

### If not installed:

Download the Maven .zip from [here](https://apache.osuosl.org/maven/maven-3/3.6.3/binaries/apache-maven-3.6.3-bin.zip). Extract it to any directory that you’d like.

Inside the extracted `apache-maven-3.6.3` folder, there should be a `bin` directory. Add that to your PATH. To do this, open up your `.bashrc` or `.bash_profile` and add `export PATH="$PATH:/(your path to Maven)/apache-maven-3.6.3/bin”`.

Verify Maven’s installation by running `mvn -v` again.

## Google Cloud SDK

Lastly, you’ll need to install the GCloud SDK.

Before you install Google Cloud SDK, find out your Python directory by running `which python`. Add the following to your `.bashrc` or `.bash_profile`: `export CLOUDSDK_PYTHON=“(path to your Python)”`

Download and follow the instructions [here](https://cloud.google.com/sdk/docs/install).

**macOS** and **Linux**: Add the GCloud SDK to your PATH the same way you added Maven to your PATH: `export PATH="$PATH:/(path to GCloud SDK)/google-cloud-sdk/bin”`.
