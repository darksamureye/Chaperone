import React, { useState } from 'react';
import { UserPlus } from 'lucide-react';
import { signUp } from '../../services/firebase/auth';
import { toast } from 'react-hot-toast';

export function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState<'parent' | 'guardian'>('parent');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await signUp(email, password, name, role);
      toast.success('Account created successfully!');
    } catch (error) {
      toast.error('Failed to create account');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm
                     focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm
                     focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm
                     focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Role</label>
          <div className="mt-1 space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="parent"
                checked={role === 'parent'}
                onChange={(e) => setRole(e.target.value as 'parent')}
                className="form-radio text-indigo-600"
              />
              <span className="ml-2">Parent</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="guardian"
                checked={role === 'guardian'}
                onChange={(e) => setRole(e.target.value as 'guardian')}
                className="form-radio text-indigo-600"
              />
              <span className="ml-2">Guardian</span>
            </label>
          </div>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex justify-center items-center gap-2 py-2 px-4
                   bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg
                   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                   disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            'Creating account...'
          ) : (
            <>
              <UserPlus className="h-5 w-5" />
              Sign Up
            </>
          )}
        </button>
      </form>
    </div>
  );
}