import { Auth } from '@supabase/auth-ui-react'
import { supabase } from "./../supabase.js";

function SignUpPage() {
    return (
      <div className="sign-up-page">
        <h1> Sign Up</h1>
        <Auth supabaseClient={supabase} />
        <p className="footerComment"> Created by James Preston</p>
      </div>
    );
  }

  export default SignUpPage