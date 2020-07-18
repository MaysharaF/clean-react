import React from 'react'
import Styles from './login-styles.scss'
import Spinner from '@/presentation/components/spinner/spinner'
import Logo from '@/presentation/components/logo/logo'

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      {/* header */}

      <header className={Styles.header}>
        <Logo />

        <h1>4D - Enquete para Programadores</h1>
      </header>

      {/* form */}
      <form className={Styles.form}>
        <h2>Login</h2>

        {/* input email */}
        <div className={Styles.inputWrap}>
          <input type="email" name="email" placeholder="Digite seu e-mail" />
          <span className={Styles.status}>❌</span>
        </div>

        {/* input password */}
        <div className={Styles.inputWrap}>
          <input
            type="password"
            name="password"
            placeholder="Digite sua senha"
          />
          <span className={Styles.status}>❌</span>
        </div>

        <button className={Styles.submit} type="submit">
          Entrar
        </button>
        <span className={Styles.link}>Criar conta</span>

        <div className={Styles.errorWrap}>
          <Spinner className={Styles.spinner} />
          <span className={Styles.error}>error</span>
        </div>
      </form>

      {/* footer */}

      <footer className={Styles.footer} />
    </div>
  )
}

export default Login
