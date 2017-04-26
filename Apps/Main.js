/**
 * @flow
 */

import React, { Component } from 'react'
import Layout from './Layout/Simple'
import { getSession } from './Libs/Session'

// Routes
import Dashboard from './Router/Dashboard'
import Profile from './Router/Profile'
import Kegiatan from './Router/Kegiatan'
import Pengurus from './Router/Pengurus'
import Login from './Router/Login'
import Spinner from './Router/Splash'

class Main extends Component {
  state = {
    title: 'Login',
    active: 'Login',
    isLogin: false,
    init: true,
  }

  componentWillMount() {
    getSession('loginNUMobile').then((data) => {
      if (data !== false) {
        this.setLogin(true)
      }
      this.setState({init: false})
    })
  }

  setLogin = (isLogin) => {
    this.setState({
      isLogin: isLogin,
    })
    
    const pageActive = isLogin ? 'Dashboard' : 'Login'
    this.setTitle(pageActive)
    this.setContent(pageActive)
  }

  setTitle = (title) => {
    this.setState({
      title: title,
    })
  }

  setContent = (content) => {
    this.setState({
      active: content,
    })
  }

  contentIs = () => {
    const label = this.state.active

    switch (label) {
      case 'Login':
          return(
            <Login setLogin={this.setLogin}/>
          )
          break
      case 'Profile':
        return(<Profile />)
        break
      case 'Kegiatan':
        return(<Kegiatan />)
        break
      case 'Pengurus':
        return(<Pengurus />)
        break
      default:
        return(
          <Dashboard setTitle={this.setTitle} setContent={this.setContent}/>
        )
    }
  }

  render() {
    if (this.state.init) {
      return (<Spinner />)
    }
    return (
      <Layout
        isLogin={this.state.isLogin}
        setLogin={this.setLogin}
        title={this.state.title}
        setTitle={this.setTitle}
        setContent={this.setContent}
      >
        { this.contentIs() }
      </Layout>
    );
  }
}

export default Main
