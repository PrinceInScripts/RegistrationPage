import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axiosInstance from '../../config/axiosInstance' 
import toast from 'react-hot-toast';

const initialState ={
  user:null,
  isAuthenticated:false,
  error:null,
  loading:true
}
  
const getUserDetailsAPI = async () => {
  try {
    const response = await axiosInstance.get('/user'); 
    console.log(response);
    return response.data.data; 
  } catch (error) {
    throw error.response.data; 
  }
};

export const createAccount=createAsyncThunk('auth/signup',async (data,{rejectWithValue})=>{
  try {
    const response= axiosInstance.post('/signup',data)
    console.log(response);

    toast.promise(response,{
      loading:"Wait ! creating your account",
      success:(data)=>{
          return data?.data?.message
      },
      error:"failed to create your account"
  })
      
    return await response
  } catch (error) {
    return rejectWithValue(error.response.data)
  }
}) 

export const login=createAsyncThunk('auth/signin',async (data,{rejectWithValue})=>{
     try {
        const response= axiosInstance.post('/signin',data)
       
        toast.promise(response,{
          loading:"Wait ! authenticate your account",
          success:(data)=>{
              return data?.data?.message
          },
          error:"failed to authenticate your account"
      })
        
          
        return await response;

      
     } catch (e) {
         return rejectWithValue(error.response.data)
     }
})

export const getUser=createAsyncThunk('auth/getUser',async (_,{rejectWithValue})=>{
   try {
      const user= getUserDetailsAPI()

      toast.promise(user, {
        loading: 'Wait!',
        success: (data) => {
          return data?.data?.message;
        },
        error: 'Failed',
      });

      return await user;
   } catch (e) {
      return rejectWithValue(e)
   }
})

export const logout=createAsyncThunk('auth/logout',async (_,{rejectWithValue})=>{
  try {
    const response= axiosInstance.get('/logout')

    toast.promise(response,{
            loading:'Wait ! logout in Process',
            success:(data)=>{
              return data?.data?.message;
            },
            error:"Faild to logout"
          })

    return await response;

  } catch (e) {
    return rejectWithValue(error.response.data)
  }
})



const authSlice=createSlice({
  name:'auth',
  initialState,
  reducers:{
        
  },
  extraReducers:(builder)=>{
    builder 
          .addCase(createAccount.pending,(state)=>{
            state.loading=true
          })
          .addCase(createAccount.fulfilled,(state,action)=>{
            state.user=action.payload;
            state.isAuthenticated=true;
            state.error=null;
            state.loading=false;
          })
          .addCase(createAccount.rejected,(state,action)=>{
            state.error=action.payload;
            state.user=null;
            state.isAuthenticated=false;
            state.loading=false
          })
          .addCase(login.pending,(state)=>{
            state.loading=true
          })
          .addCase(login.fulfilled,(state,action)=>{
            state.user=action.payload;
            state.isAuthenticated=true;
            state.error=null;
            state.loading=false
          })
          .addCase(login.rejected,(state,action)=>{
            state.error=action.payload;
            state.user=null;
            state.isAuthenticated=false;
            state.isAuthenticated=false
          })
          .addCase(getUser.pending,(state)=>{
            state.loading=true;
          })
          .addCase(getUser.fulfilled,(state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
            state.error = null;
            state.loading = false;
          })
          .addCase(getUser.rejected,(state, action) => {
            state.error = action.payload;
            state.user = null;
            state.isAuthenticated = false;
            state.loading = false;
          })
          .addCase(logout.pending, (state) => {
            state.loading = true;
          })
          .addCase(logout.fulfilled, (state) => {
            state.user = null;
            state.isAuthenticated = false;
            state.error = null;
            state.loading = false;
          })
          .addCase(logout.rejected, (state, action) => {
            state.error = action.payload;
            state.user = null;
            state.isAuthenticated = false;
            state.loading = false;
          });
  }

})

export default authSlice.reducer;


