# Front End Developer / Module 1 - Introduction to Modern Front End Development / Notes

[:arrow_backward: Front End Developer / Module 1 - Introduction to Modern Front End Development](./README.md)

---

- [Front End Developer / Module 1 - Introduction to Modern Front End Development / Notes](#front-end-developer--module-1---introduction-to-modern-front-end-development--notes)
  - [Visual Studio Code](#visual-studio-code)
  - [Git](#git)
    - [GitHub](#github)
    - [GitHub Desktop](#github-desktop)
  - [Web Browsers](#web-browsers)
  - [Node.js and NPM](#nodejs-and-npm)
  - [How Does the Internet Work?](#how-does-the-internet-work)
    - [The Internet Protocol](#the-internet-protocol)
    - [TCP and UDP protocols](#tcp-and-udp-protocols)
    - [HTTP](#http)
    - [DNS](#dns)
    - [Hosting](#hosting)

## Visual Studio Code

[**Visual Studio Code**](https://code.visualstudio.com/) (VS Code) is our code editor of choice for this course. It's free, open-source, and extensible which makes it a great fit for many use cases. The [2019 Stack Overflow Developer Survey](https://insights.stackoverflow.com/survey/2019) lists it as the most popular choice among all respondents, so it's safe to say that it became an industry standard in recent times.

VS Code is available for all major operating systems. We can find installation instructions for our operating system [here](https://code.visualstudio.com/docs/setup/setup-overview) or visit the [homepage](https://code.visualstudio.com/) and have the website guess the right installation platform for us.

> :point_up: **Note!**
> 
> You can use other code editors, but course materials were created with VS Code in mind. Some of the problems encountered later on in the course may require alternative solutions if a different code editor is used.

> :pencil: **Homework!**
> 
> VS Code is a tool, but we don't have to treat it as such. We will spend a lot of time inside VS Code so let's make it feel more like home. Watch the set of [introductory videos](https://code.visualstudio.com/docs/getstarted/introvideos) on the VS Code website and try installing a theme from the [Marketplace](https://marketplace.visualstudio.com/search?target=VSCode&category=Themes&sortBy=Installs) that you like the most, or use one of the themes that come bundled with VS Code.

## Git

[**Git**](https://git-scm.com/) is the version-control system (VCS) we will use to keep track of changes made to our code. VSCs like Git make it possible for us to take snapshots of our code, making it easy to identify when and where we introduced a certain change. We will cover git in more detail later on in this course.

Git is available for all major operating systems and often comes pre-installed with popular Linux distributions. We can find installation instructions for our operating system [here](https://git-scm.com/downloads) or visit the [homepage](https://git-scm.com/) and have the website guess the right installation platform for us.

> :point_up: **Note!**
>
> Installing Git for Windows will put you through a series of steps asking you to configure your installation. Always use the recommended configuration options if you're not an experienced user.

We can make sure Git installed successfully by opening a terminal and typing:

```
git --version
```

A successful installation should have the terminal output the installed version of Git:

```
git version 2.8.3
```

> :point_up: **Note!**
>
> How to open a terminal window depends on the operating system:
> - On Windows 10, PowerShell is the recommended terminal.
> - On earlier versions of Windows you can use either PowerShell or Command Prompt.
> - On Linux distributions and Mac (OSX) use the Terminal (or similarly named) application.

After installing Git we have to take a couple of additional steps to configure a username and email. This information is embedded in every change we make to code that Git is keeping track of. It is how we know who made a change and how to get in touch with them if we need to.

To see the current Git configuration use:

```
git config --list
```

Git configurations can be set up per-project and globally. It is good practice to set up a global configuration with default values and to use per-project configurations when necessary.

To set a Git username and email globally use:

```
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```

More information on setting up Git for the first time can be found in the [official documentation](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup).

> :point_up: **Note!**
>
> Configuration values with whitespace characters (e.g. space) should be quoted. This way we ensure Git recognises the value as a single value, instead of two separate ones.
> 
> Do this:
>
> ```
> git config --global user.name "John Doe"
> ```
> 
> Don't do this:
> 
> ```
> git config --global user.name John Doe
> ```

### GitHub

[GitHub](https://github.com/) is a platform for developers to contribute and collaborate on code projects versioned with Git. We will use GitHub to build our portfolio of projects and collaborate on this course repository.

> :point_up: **Note!**
>
> Despite sharing a similar name, GitHub and Git are not affiliated.

Creating a GitHub account is free and requires only a username, email, and password. Paid personal and enterprise plans also exist, but the free plan provides all must-have features and does not prevent us from using GitHub to its fullest.

> :point_up: **Note!**
>
> Make sure the email address you use to register an account with GitHub matches the email address you configured Git with in the previous chapter. This will help GitHub connect your account identity with the one stored in Git. If they don't match, simply reconfigure Git to use the GitHub email.

> :pencil: **Homework!**
>
> Read about [saving repositores with stars](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/saving-repositories-with-stars) and [forking repositories](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/fork-a-repo). Log into your GitHub account and star and fork the [course repository](https://github.com/dstrekelj/algebra-front-end-developer-2019). 

### GitHub Desktop

Git is not run as a typical application that opens a window and lets us interface with it through button clicks and inputs. Instead, we interface with it by typing out commands in a terminal.

In simpler terms, Git uses a command-line interface (CLI) instead of a graphical user interface (GUI). This makes Git a command-line utility.

We will cover using Git as a command-line utility later in the course. Until then, we can make use of free desktop clients that provide us a GUI. We will use [GitHub Desktop](https://desktop.github.com/), one of the simpler options available on the market.

GitHub Desktop is available for all major operating systems. We can visit the [homepage](https://desktop.github.com/) and have the website guess the right installation platform for us.

> :pencil: **Homework!**
> 
> We won't be looking at GitHub Desktop in-depth during this course. Read more on [installing and configuring GitHub Desktop](https://docs.github.com/en/free-pro-team@latest/desktop/installing-and-configuring-github-desktop) and get familiar with Git and GitHub by creating their example repository.

## Web Browsers

A big concern in frontend development is providing support for web browsers with significant market shares. For that to be possible we need to work with browsers which support the latest in web development standards and provide quality developer tools.

The two options are [**Google Chrome**](https://www.google.com/chrome/) and [**Mozilla Firefox**](https://www.mozilla.org/en-US/firefox/new/). Both are available on all major operating systems.

> :point_up: **Note!**
>
> It's not uncommon for frontend developers to install multiple different browsers on their machines for the sake of testing.
> 
> Sometimes we need to support browsers which we cannot install because of compatibility issues or vendor-locking. In that case we use services such as [LambdaTest](https://www.lambdatest.com/) and [BrowserStack](https://www.browserstack.com/) which allow us to test websites and web applications across different browsers and devices.

## Node.js and NPM

[**Node.js**](https://nodejs.org/en/) is a JavaScript runtime built on Chrome's [V8 JavaScript engine](https://v8.dev/). It lets us run JavaScript outside of the browser. This makes it possible to use JavaScript for all kinds of projects: mobile applications, desktop applications, APIs, games, and more. We will use it to get familiar with JavaScript before we start interacting with the browser and webpages we create.

[NPM](https://www.npmjs.com/) (Node Package Manager) is the package management utility that comes bundled with Node. Package managers help us install and publish self-contained modules of code that can be shared and used across different projects. We will use NPM to install [React](https://reactjs.org/) and similar packages, and to keep track of which packages our project depends on. Projects built with NPM come with a handy package manifest which lists all package dependencies along with other project information. This makes it easy for new developers to start contributing because NPM can read and setup projects from scratch using the manifest. 

Node and NPM are available for all major operating systems and sometimes come bundled with Linux distributions. We can visit the [homepage](https://nodejs.org/en/) and have the website guess the right installation platform for us.

> :point_up: **Note!**
>
> The Node release schedule specifies Long Term Support (LTS) and latest versions. It is always recommended to install the LTS version.
> 
> LTS versions are evenly numbered. They are maintained with bugfixes for a longer period of time. This longer maintenance period is a necessity, especially for projects intended to be used in production environments.
> 
> Latest versions are odd numbered. They are more experimental in nature and are abandoned much faster after the release of a new LTS version.
>
> Install the latest version if you want to try new and experimental features ahead of time.

Like Git, Node and NPM are command-line utilities. While NPM does have a couple of GUIs made for it, Node has no use of one because it is a runtime - an environment which runs code. We will use both utilities through the command-line and will learn more about them later on.

We can make sure Node installed successfully by opening a terminal and typing:

```
node --version
```

A successful installation should have the terminal output the installed version of Node:

```
v14.15.0
```

Similarly for NPM:

```
npm --version
```

```
6.14.8
```

## How Does the Internet Work?

The internet works much like the postal service. Let's begin by looking at how we communicate with each other by post.

We want to send a package. We address it so the postal carrier knows who to deliver it to. When the package reaches the processing plant it is assigned a carrier that knows the address' general area. The carrier picks up the package, checks the address, and attempts to make the delivery. If the package cannot be delivered, the processing plant and sender are notified.

Communication between computers over the internet is not much different. However, there are some additional steps involved.

### The Internet Protocol

Computers communicate by sending messages. Before being sent, messages are broken down into smaller pieces called packets. Packets are structured according to a set of rules called a protocol, in this case the Internet Protocol (IP). The data stored in the packet's structure is how the computer knows which message the packet belongs to and how to reconstruct the message from the packets it receives. Using our previous analogy, this is similar to us sending a package and having to address it beforehand by following the rules given by the post office.

Packets are sent over the internet through a network of routers. Routers are specialised computers tasked with moving a packet from the source computer to the destination computer. Routers find computers on the network by the unique address each computer on the network is assigned. This unique address is called the Internet Protocol address or IP address. The IP address is a series of four numbers ranging from 0 to 255 separated by dots, e.g. `192.168.1.1`. Routers contain lists of addresses that point to computers or other routers which may know where a particular computer is located. This is how a packet can move through several routers in a routing network before reaching the destination computer. Again, this bears similarities to the processing plant and post carries from our previous analogy.

> :point_up: **Note!**
> 
> Reserved IP addresses.

> :point_up: **Note!**
> 
> @todo IPv4 vs IPv6

### TCP and UDP protocols

Once the packets arrive at their destination, their data structure is read and they are assembled into the message that was sent by the source computer. However, like with the post in real life, sometimes packets don't reach their destination and the message gets corrupted. This is known as packet loss.

Packet loss and similar unfortunate occurrences are handled by transport protocols. Transport protocols define rules for packet communication, reliability, flow control, and more. Two of the most commonly used transport protocols are Transport Control Protocol (TCP) and User Datagram Protocol (UDP).

TCP offers reliable packet transport even over unreliable networks. It establishes a connection between computers with the help of a three-way handshake: the connection is first initiated and acknowledged; then the connection is established and data transfer started; and finally the connection is terminated when the transfer is finished. The handshaking process makes TCP slower in comparison to other protocols, but enables the computer to perform error checking and recovery.

UDP does not use handshake protocols to establish a connection and is thus considered connectionless. It also does not perform error checking and recovery, but instead discards all faulty packets upon their arrival. This makes UDP packets smaller and transport faster in comparison to other protocols. UDP is is widely used for audio and video stream broadcasting where packet loss can be observed in the form of degraded quality or glitching.

> :point_up: **Note!**
> 
> @todo OSI model layers

### HTTP

@todo

### DNS

@todo

### Hosting

@todo
