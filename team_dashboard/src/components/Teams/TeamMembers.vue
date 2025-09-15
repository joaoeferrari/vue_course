<script setup>
    import TeamMember from './TeamMember.vue';
    import { useTeamStore } from '@/stores/TeamStore';

    let team = useTeamStore();
</script>

<template>
    <table class="table-fixed border-spacing-2 border-separate">
            <thead>
                <tr> 
                    <th class="text-left px-6 py-2">Name</th>
                    <th class="text-left px-6 py-2">Email</th>
                    <th class="text-left px-6 py-2">Status</th>
                </tr>
            </thead>
            <tbody>
                <header class="flex justify-between" >
                    <div>
                        <button class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
                        :disabled="team.members.length === team.spots"> Add Member ({{ team.spots - team.members.length }} Spots Left) </button>
                    </div>

                    <div>
                        <h3 class="inline-flex items-center text-3xl relative" >
                            <img src="../assets/smiley.png" alt="" class="mr-2">
                            {{team.name}} Team 
                            <div class="bg-green-400 w-5 h-5 text-xs text-white rounded-full flex justify-center items-center absolute -right-4 -top-2" >{{ team.spots }}</div>
                        </h3>
                    </div>
                </header>

                <TeamMember 
                    v-for="member in team.members" 
                    :key="member.id" 
                    :name="member.name" 
                    :email="member.email" 
                    :status="member.status" 
                />
                
            </tbody>

        </table>

        <p class="text-right text-gray-600 italic" v-show="! team.spotsRemaining" >There are no reimaining team spots. Upgrade to add more</p>

</template>