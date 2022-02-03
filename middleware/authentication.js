export default function ({ store, route, redirect }) {
      const publicPages = ['/login'];
      const authpage = !publicPages.includes(route.path);
      const loggeduser = localStorage.getItem('user');
      if (authpage && !loggeduser) {
        return redirect('/login');
      }
      redirect();
}
