<template>
  <div class='app'>
    <div class='header'>
      <h1>Welcome!</h1>
    </div>
    <div class='content'>
      <button @click="logMeIn">Login</button>
      <p>{{userInfo}}</p>
      <div style="margin-bottom: 30px;"></div>
      <div className="optionSection">
        <input type="file" id="uploadFile" />
        <button @click='uploadFile'>Upload File</button>
      </div>
      <div className="optionSection">
        <input type="file" id="uploadFileTwo" />
        <button @click='uploadToSubdirectory'>Test Subdirectory</button>
      </div>
      <div className="optionSection">
        <input disabled type="text" id="deletePath" placeholder="Path To File" style="text-align: center;"/>
        <button @click='deleteFile' disabled>Delete File</button>
      </div>
      <div className="optionSection">
        <button @click='listFiles'>List Files</button>
        <p style="font-size: 16px;">Warning: Large Results</p>
      </div>
      <div className="optionSection">
        <input type="file" id="uploadBatchOne" />
        <input type="file" id="uploadBatchTwo" />
        <input type="file" id="uploadBatchThree" />
        <button @click='batchUpload'>Batch Upload</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { AssetManager } from "@dfinity/assets";

export default {
  name: "Main",
  // Define and instantiate your state data by stating 'yourVar: itsType'
  // Use it in HTML by {{yourData}} and in JS by using 'this.yourData'
  data: () => ({
    userInfo: "Not Logged In.",
    canisterId: "qgh4x-kyaaa-aaaaj-afk5q-cai",
  }),
  // Define what Vue components will be loaded if any
  components: {
    
  },
  // Define your functions here to be called throughout the rest of the program
  // Use async and separate each function with a comma.
  // Call these by using 'this.yourFunctionName()' in JS or @click='' in HTML
  methods: {
    async logMeIn() {
      const whitelist = [(this as any).canisterId];
      await (window as any).ic.plug.requestConnect({whitelist});
      (this as any).userInfo = await (window as any).ic.plug.agent.getPrincipal();
    },
    async uploadFile() {
      const agent = await (window as any).ic.plug.agent;

      const assetManager = new AssetManager({
        canisterId: (this as any).canisterId,
        agent: agent
      });

      const inputFile = (document.getElementById("uploadFile") as any).files[0];
      const result = await assetManager.store(inputFile);
      console.log(result);
    },
    async uploadToSubdirectory() {
      const agent = (window as any).ic.plug.agent;
      const assetManager = new AssetManager({
        canisterId: (this as any).canisterId,
        agent: agent
      });
      const inputFile = (document.getElementById("uploadFileTwo") as any).files[0];

      const StoreConfig = {
        path: '/uploaded',
      }

      const result = await assetManager.store(inputFile, StoreConfig);
      console.log(result);
    },
    // Update canister to use this function
    async deleteFile() {
      const agent = await (window as any).ic.plug.agent;
      const assetManager = new AssetManager({
        canisterId: (this as any).canisterId,
        agent: agent
      });
      const fileToDelete = (document.getElementById("deletePath") as any).value;
      const result = await assetManager.delete(fileToDelete);
    },
    async listFiles() {
      const agent = (window as any).ic.plug.agent;
      const assetManager = new AssetManager({canisterId: (this as any).canisterId, agent: agent});
      const result = await assetManager.list();
      console.log(result);
    },
    async batchUpload() {
      const agent = (window as any).ic.plug.agent;
      const assetManager = new AssetManager({canisterId: (this as any).canisterId, agent: agent});
      const StoreConfig = {
        path: '/batched',
      }
      const inputFileOne = (document.getElementById("uploadBatchOne") as any).files[0];
      const inputFileTwo = (document.getElementById("uploadBatchTwo") as any).files[0];
      const inputFileThree = (document.getElementById("uploadBatchThree") as any).files[0];
      const batch = assetManager.batch();
      const keys = [
        await batch.store(inputFileOne, StoreConfig),
        await batch.store(inputFileTwo, StoreConfig),
        await batch.store(inputFileThree, StoreConfig)
      ];
      const result = await batch.commit();
      if (result ==  null) {
        console.log("Successfully uploaded!");
      } else {
        console.log(result);
      }
    }
  }
}
</script>

<style scoped>

.app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.header {
  position: absolute;
  top: 0;
  left: 0;
  height: 70px;
  width: 100%;
  background-color: #202020;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #ffcf40;
  font-size: 18px;
}

.content {
  margin-top: 100px;
  height: auto;
  width: 700px;
  border: 1px solid gray;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-size: 20px;
  color: #e7e7e7;
}

button {
  background: none;
  border: 1px solid #ffcf40;
  border-radius: 12px;
  font-size: 16px;
  padding: 8px 10px;
  color: lightgoldenrodyellow;
  cursor: pointer;
}

button:hover {
  background-color: rgba(255,255,255,0.1);
}

button:disabled {
  background-color: #101010;
  color: gray;
  border: 1px solid gray;
  cursor: default;
}

input:disabled {
  background-color: #202020;
  color: gray;
}

.optionSection {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px solid #101010;
  padding: 15px;
  border-radius: 16px;
  margin-bottom: 10px;
  width: 300px;
}

.optionSection input {
  margin-bottom: 20px;
}

</style>
