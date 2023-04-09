import React from "react";
import { useForm, Controller } from "react-hook-form";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import { InputAdornment, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { login } from "../../store/slices/auth/login.slice";

function Login() {
  const dispatch: AppDispatch = useDispatch();
  const [showPassword, setShowPassword] = React.useState(false);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const onSubmit = (data: any) => dispatch(login(data));

  return (
    <main className="h-full sm:h-screen py-24 px-4 sm:px-16 bg-white">
      <div className="max-w-7xl mx-auto mt-24">
        <div className="w-full mb-32">
          <img src="/assets/logo.svg" alt="logo" />
        </div>

        <div className="w-full grid grid-cols-2 gap-x-8 gap-y-8">
          <div className="col-span-2 sm:col-span-1">
            <img src="/assets/pablo-sign-in.png" alt="" />
          </div>

          <div className="col-span-2 sm:col-span-1">
            <div className="mb-16">
              <h2 className="text-4xl text-secondary mb-4">Welcome!</h2>
              <span className="text-base">Enter details to login.</span>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={2} direction="column" sx={{ mb: 4 }}>
                <FormControl fullWidth sx={{ mb: 3 }}>
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => <OutlinedInput placeholder="Email" {...field} />}
                  />
                </FormControl>
                <FormControl>
                  <Controller
                    name="password"
                    control={control}
                    render={({ field }) => (
                      <OutlinedInput
                        {...field}
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        endAdornment={
                          <InputAdornment position="end">
                            <Button color="primary" onClick={handleClickShowPassword}>
                              {showPassword ? "HIDE" : "SHOW"}
                            </Button>
                          </InputAdornment>
                        }
                      />
                    )}
                  />
                </FormControl>
              </Stack>

              <div className="mb-6">
                <Typography className="uppercase" sx={{ color: "primary.main" }} variant="button">
                  Forgot PASSWORD?
                </Typography>
              </div>

              <Button size="large" type="submit" variant="contained" color="primary" fullWidth>
                Log in
              </Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
