<navigation>
  <ul onclick={alertMe}>
    <li each={opts.pages}><a href={url}>{name}</a></li>
  </ul>

  <style>
    ul {
      padding-top: 20px;
      padding-bottom: 30px;
      margin: 0;
      background-color: black;
      font-family: 'Helvetica Neue';
      font-weight: 100;
      letter-spacing: 1px;
    }

    li {
      padding-left: 0;
      display: inline-block;
      margin-right: 16px;
    }

    a {
      color: #fff;
      text-decoration: none;
    }
  </style>

  alertMe() {
    window.alert('Alert Me!')
  }
</navigation>