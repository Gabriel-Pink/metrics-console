"use client";

import { Input } from "@/components/Input/index";
import axios from "axios";
import { FormEvent, useState } from "react";

export function SigninForm () {

    const [secret, setSecret] = useState("");

    const handleSubmit = async (e: FormEvent) => {

        e.preventDefault();

        try {
            const { data } = await axios.post('https://thhjr85uqg.execute-api.us-east-1.amazonaws.com/auth', { auth_code: secret });

            document.cookie = `authToken=${data.token}; Path=/;`;

            console.log(data.token)   

        } catch (error) {
          console.error('Erro ao autenticar', error);
        }
      };

    return (
        <form onSubmit={handleSubmit}>
            <Input.Root onChange={(e) => setSecret(e.target.value)}>
                <Input.LateralButton border="normal" />
            </Input.Root>
        </form>
    )
}