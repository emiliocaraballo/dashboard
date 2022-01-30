export default function ({ store, route, redirect }) {
    const loggeduser = localStorage.getItem('user');
    if (loggeduser) {
      return redirect('/');
    }
    redirect();
}
