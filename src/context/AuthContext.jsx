
import { createContext, useContext, useState, useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const { toast } = useToast();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is stored in localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      // In a real app, this would be an API call
      // For this prototype, we'll simulate a successful login for demo purposes
      if (email && password) {
        // Demo users - in a real app, this would verify credentials with a backend
        const demoUser = { id: '1', name: 'Usuario Demo', email: email };
        setUser(demoUser);
        localStorage.setItem('user', JSON.stringify(demoUser));
        toast({
          title: "Inicio de sesión exitoso",
          description: "Bienvenido a la Biblioteca Virtual",
        });
        return true;
      } else {
        toast({
          variant: "destructive",
          title: "Error de inicio de sesión",
          description: "Correo o contraseña incorrectos",
        });
        return false;
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error de inicio de sesión",
        description: "No se pudo iniciar sesión",
      });
      return false;
    }
  };

  const register = async (name, email, password) => {
    try {
      // In a real app, this would be an API call
      // For this prototype, we'll simulate a successful registration
      if (name && email && password) {
        const newUser = { id: '1', name, email };
        setUser(newUser);
        localStorage.setItem('user', JSON.stringify(newUser));
        toast({
          title: "Registro exitoso",
          description: "Bienvenido a la Biblioteca Virtual",
        });
        return true;
      } else {
        toast({
          variant: "destructive",
          title: "Error de registro",
          description: "Por favor complete todos los campos",
        });
        return false;
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error de registro",
        description: "No se pudo completar el registro",
      });
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    toast({
      title: "Sesión cerrada",
      description: "Has cerrado sesión exitosamente",
    });
  };

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      login,
      register,
      logout,
      isAuthenticated: !!user,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
