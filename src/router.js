import { createBrowserRouter } from 'react-router-dom';
import App from './component/app/App';
import UserList from './component/users/userList';

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <App />,
            children: [
                {
                    path: "/users",
                    element: <UserList></UserList>
                }
            ]


        }
    ]
)
export default router