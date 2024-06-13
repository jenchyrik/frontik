import { Productcard } from '../types/productcard'
import { Promo } from '../types/promo'
import { User } from '../types/user'

const BASE = 'http://localhost:7777/api'

export async function fetchPromos(): Promise<Promo[]> {
    
    const res = await fetch(`${BASE}/promo`,{}
    )
    if (!res.ok) throw new Error('Ошибка загрузки рекламы')
    return res.json()
}

export async function fetchUserData(userId: number): Promise<User> {
  
  let authToken = localStorage.getItem('user')
	authToken = 'Bearer ' + authToken
  if (authToken && authToken.startsWith('"') && authToken.endsWith('"')) {
		authToken = authToken.slice(1, -1) 
	}
  console.log(authToken)
  const res = await fetch(`${BASE}/users/me`, {method: 'GET',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': authToken ? authToken : '',
}})

  if (!res.ok) {
      throw new Error('Ошибка загрузки данных пользователя')
  }

  return res.json()
}


export async function fetchProductcard(): Promise<Productcard[]> {
    
    let authToken = localStorage.getItem('user')
	if (authToken && authToken.startsWith('"') && authToken.endsWith('"')) {
		authToken = authToken.slice(1, -1) 
	}

    console.log(authToken)

    const res = await fetch(`${BASE}/product`,{
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': authToken ? authToken : '',
        }
    }
    )
    if (!res.ok) throw new Error('Ошибка загрузки рекламы')
    return res.json()
}

export async function LoginUser(Credentionals: {
    email: string
    password: string
  }): Promise<User> {
    const res = await fetch(`${BASE}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: Credentionals.email,
        password: Credentionals.password,
      }),
    })
  
    if (!res.ok) {
      throw new Error(
        'Ошибка во время выполнения запроса на регистрацию пользователя'
      )
    }
  
    const token = await res.json() 
    const tokenId = token.token.replace(/"/g, '') 
    localStorage.setItem('user', tokenId)
  
    console.log(tokenId)
  
    return token
  }

  

  export async function RegisterUser(newUser: User): Promise<User> {
	const res = await fetch(`${BASE}/auth/register`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
            id: newUser.id,
	        name: newUser.name,
            email: newUser.email,
            tokens: newUser.tokens,
            createdAt: newUser.createdAt,
            roleid: newUser.roleid,
	        username: newUser.username,
			password: newUser.password,
		}),
	})

	if (!res.ok) {
		throw new Error(
			'Ошибка во время выполнения запроса на регистрацию пользователя'
		)
	}

	const token = await res.json(); 
  const tokenId = token.token ? token.token.replace(/"/g, '') : ''; 
  const username = token.name ? token.name.replace(/"/g, '') : ''; 
  localStorage.setItem('username', username);
  localStorage.setItem('user', tokenId);
  
  console.log(tokenId);
  console.log(username);
  
	return token 
}