import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import '@styles/antd.less'
import '@styles/tailwind.css'
import '@styles/global.scss'

const MainLayout = ({ element }) => (
  <>
    <Helmet title={process.env.APP_NAME} defer={false} />
    {element}
  </>
)

MainLayout.propTypes = {
  element: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
}

export default MainLayout
