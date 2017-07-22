using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FileGenerator
{
    class FileGenerator
    {
        public class Items
        {
            public List<Item> items { get; set; }
            
        }


        public static void WriteItemsToFile(List<Item> items, string filename)
        {
            if (!Directory.Exists(Path.GetDirectoryName(filename)))
            {
                Directory.CreateDirectory(Path.GetDirectoryName(filename));
            }
            File.WriteAllText(filename, JsonConvert.SerializeObject(items));
        }
        public static BaseBonus FindMappedBonus(Item.Bonus b)
        {
            var bonusList = GetBonusList();

            if (b.type == (int)DaocEnums.bonustype.Attribute)
            {
                var AttributeList = GetBonusList().Where(x => x.Type == DaocEnums.bonustype.Attribute).ToList();
                foreach(var bonus in AttributeList)
                {
                    if((int)(bonus as AttributeBonus).Attr == b.id)
                    {
                        bonus.Value = b.value;
                        return bonus;
                    }
                }
                return null;
            }
            else if (b.type == (int)DaocEnums.bonustype.Resistance)
            {
                var AttributeList = GetBonusList().Where(x => x.Type == DaocEnums.bonustype.Resistance).ToList();
                foreach (var bonus in AttributeList)
                {
                    if ((int)(bonus as ResistanceBonus).Res == b.id)
                    {
                        bonus.Value = b.value;
                        return bonus;
                    }
                }
                return null;
            }
            else 
            {
                
                 var bonus= bonusList.Where(x => x.Type == (DaocEnums.bonustype)b.type).First();
                bonus.Value = b.value;
                return bonus;
            }
        }

        public static List<BaseBonus> GetBonusList()
        {
            return new List<BaseBonus>() {
                //new BaseBonus(DaocEnums.bonustype.Attribute,75,"Attribute", false),
                new BaseBonus(DaocEnums.bonustype.Skill, 11, "Skill", false),
                new BaseBonus(DaocEnums.bonustype.Hits, 200, "Hits", false),
                //new BaseBonus(DaocEnums.bonustype.Resistance,  26, "Resistance", false),
                new BaseBonus(DaocEnums.bonustype.Focus,  50, "Focus", false),
                new BaseBonus(DaocEnums.bonustype.MeleeDamage,  10, "Melee Damage", false),
                new BaseBonus(DaocEnums.bonustype.MagicDamage,  10, "Magic Damage", false),
                new BaseBonus(DaocEnums.bonustype.StyleDamage,  10, "Style Damage", false),
                new BaseBonus(DaocEnums.bonustype.ArcheryRange,  10, "Archery Range", false),
                new BaseBonus(DaocEnums.bonustype.SpellRange,  10, "Spell Range", false),
                new BaseBonus(DaocEnums.bonustype.SpellDuration,  25, "Spell Duration", false),
                new BaseBonus(DaocEnums.bonustype.Healing,  25, "Healing Effectiveness", false),
                new BaseBonus(DaocEnums.bonustype.StatDebuff,  25, "Stat Debuff Effectiveness", false),
                new BaseBonus(DaocEnums.bonustype.StatBuff,  25, "Stat Buff Effectiveness", false),
                new BaseBonus(DaocEnums.bonustype.Fatigue,  null, "Fatigue", false),
                new BaseBonus(DaocEnums.bonustype.MeleeSpeed,  10, "Melee Speed", false),
                new BaseBonus(DaocEnums.bonustype.ArcherySpeed,  10, "Archery Speed", false),
                new BaseBonus(DaocEnums.bonustype.CastingSpeed,  10, "Casting Speed", false),
                new BaseBonus(DaocEnums.bonustype.AF,  50, "Armor Factor", false),
                new BaseBonus(DaocEnums.bonustype.CraftMinQuality,  null, "Increases Minimum Crafting Quality", false),
                new BaseBonus(DaocEnums.bonustype.CraftQuality,  null, "Increases Craft Quality", false),
                new BaseBonus(DaocEnums.bonustype.CraftSpeed,  null, "Increase Craft speed", false),
                new BaseBonus(DaocEnums.bonustype.CraftSkillIncrease,  null, "Increases Chance of Craft Skill Up", false),
                new BaseBonus(DaocEnums.bonustype.ArcheryDamage,  10, "Archery Damage", false),
                new BaseBonus(DaocEnums.bonustype.StatCap,  26, "Stat Cap", false),
                new BaseBonus(DaocEnums.bonustype.HitsCap,  200, "Hits Cap", false),
                new BaseBonus(DaocEnums.bonustype.PowerCap,  50, "Power Cap", false),
                new BaseBonus(DaocEnums.bonustype.FatigueCap,  null, "Fatigue Cap", false),
                new BaseBonus(DaocEnums.bonustype.SpellPierce,  10, "Spell Pierce", false),
                new BaseBonus(DaocEnums.bonustype.PowerPool,  25, "Power Pool", false),
                new BaseBonus(DaocEnums.bonustype.ArcaneSiphon,  20, "Arcane Siphon", false),
                new BaseBonus(DaocEnums.bonustype.PowerCostReductionPvE,  null, "Power Cost Reduction", true),
                new BaseBonus(DaocEnums.bonustype.Concentration,  null, "Concentration", false),
                new BaseBonus(DaocEnums.bonustype.HealthRegen,  null, "Health Regen", false),
                new BaseBonus(DaocEnums.bonustype.PowerRegen,  null, "Power Regen", false),
                new BaseBonus(DaocEnums.bonustype.PierceAblative,  null, "Pierce Ablative", false),
                new BaseBonus(DaocEnums.bonustype.XpLossReduc,  null, "Reduces Experience Loss upon Death", false),
                new BaseBonus(DaocEnums.bonustype.NegativeDurationRedPvE,  null, "Reduces the duration of negative effects", true),
                new BaseBonus(DaocEnums.bonustype.StyleCostReducPvE,  null, "Reduces the endurance cost of styles", true),
                new BaseBonus(DaocEnums.bonustype.ToHitBonusPvE,  null, "Increase the chance to hit", true),
                new BaseBonus(DaocEnums.bonustype.DefensiveBonusPvE,  null, "Defensive Bonus", true),
                new BaseBonus(DaocEnums.bonustype.BladeTurnReinforcementPvE,  null, "Blade Turn Reinforcement", true),
                new BaseBonus(DaocEnums.bonustype.ParryPvE,  null, "Increases the chance to Parry", true),
                new BaseBonus(DaocEnums.bonustype.BlockPvE,  null, "Increases the chance to Block", true),
                new BaseBonus(DaocEnums.bonustype.EvadePvE,  null, "Increase the chance to Evade", true),
                new BaseBonus(DaocEnums.bonustype.ReactStyleDmgPvE,  null, "Increases the damage of reactionary styles", true),
                new BaseBonus(DaocEnums.bonustype.MythicalEncumbrance,  null, "Mythical Encumbrance", false),
                new BaseBonus(DaocEnums.bonustype.MythicalResCap,  null, "Mythical Resistance Cap", false),
                new BaseBonus(DaocEnums.bonustype.MythicalSiegeSpeed,  null, "Mythical Siege Speed", false),
                new BaseBonus(DaocEnums.bonustype.MythicalParry,  null, "Mythical Parry", false),
                new BaseBonus(DaocEnums.bonustype.MythicalEvade,  null, "Mythical Evade", false),
                new BaseBonus(DaocEnums.bonustype.MythicalBlock,  null, "Mythical Block", false),
                new BaseBonus(DaocEnums.bonustype.MythicalCoin,  null, "Mythical Coin", false),
                new BaseBonus(DaocEnums.bonustype.MythicalStatCap,  26, "Mythical Attribute Cap Increase", false),
                new BaseBonus(DaocEnums.bonustype.MythicalCrowdControlDurationDecrease,  null, "Mythical Crowd Control Duration Decrease", false),
                new BaseBonus(DaocEnums.bonustype.MythicalEssenceResist,  null, "Mythical Essence Resist", false),
                new BaseBonus(DaocEnums.bonustype.MythicalResCapStat,  null, "Mythical Resistance Cap Increase", false),
                new BaseBonus(DaocEnums.bonustype.MythicalSiegeAblative,  null, "Mythical Siege Ablative", false),
                new BaseBonus(DaocEnums.bonustype.MythicalDPS,  null, "Mythical DPS", false),
                new BaseBonus(DaocEnums.bonustype.MythicalRPS,  null, "Mythical Realm Points", false),
                new BaseBonus(DaocEnums.bonustype.MythicalStatIncrease,  null, "Mythical Stat Increase", false),
                new BaseBonus(DaocEnums.bonustype.MythicalResSickReduction,  null, "Mythical Ressurection Sickness Reduction", false),
                new BaseBonus(DaocEnums.bonustype.MythicalStatCapStat,  null, "Mythical Stat and Cap Increase", false),
                new BaseBonus(DaocEnums.bonustype.MythicalHealthRegen,  null, "Mythical Health Regen", false),
                new BaseBonus(DaocEnums.bonustype.MythicalPowRegen,  null, "Mythical Power Regen", false),
                new BaseBonus(DaocEnums.bonustype.MythicalEndoRegen,  null, "Mythical Endurance Regen", false),
                new BaseBonus(DaocEnums.bonustype.MythicalPhysicalDefense,  null, "Mythical Physical Defense", false),
                new AttributeBonus(DaocEnums.bonustype.Attribute,  75, "Acuity", false, DaocEnums.Attributes.Acuity),
                new AttributeBonus(DaocEnums.bonustype.Attribute,  75, "Charisma", false, DaocEnums.Attributes.Charisma),
                new AttributeBonus(DaocEnums.bonustype.Attribute,  75, "Constitution", false, DaocEnums.Attributes.Constitution),
                new AttributeBonus(DaocEnums.bonustype.Attribute,  75, "Dexterity", false, DaocEnums.Attributes.Dexterity),
                new AttributeBonus(DaocEnums.bonustype.Attribute,  75, "Empathy", false, DaocEnums.Attributes.Empathy),
                new AttributeBonus(DaocEnums.bonustype.Attribute,  75, "Intelligence", false, DaocEnums.Attributes.Intelligence),
                new AttributeBonus(DaocEnums.bonustype.Attribute,  75, "Piety", false, DaocEnums.Attributes.Piety),
                new AttributeBonus(DaocEnums.bonustype.Attribute,  75, "Quickness", false, DaocEnums.Attributes.Quickness),
                new AttributeBonus(DaocEnums.bonustype.Attribute,  75, "Strength", false, DaocEnums.Attributes.Strength),
                new ResistanceBonus(DaocEnums.bonustype.Resistance,  26, "Body", false, DaocEnums.Resistances.Body),
                new ResistanceBonus(DaocEnums.bonustype.Resistance,  26, "Cold", false, DaocEnums.Resistances.Cold),
                new ResistanceBonus(DaocEnums.bonustype.Resistance,  26, "Crush", false, DaocEnums.Resistances.Crush),
                new ResistanceBonus(DaocEnums.bonustype.Resistance,  26, "Energy", false, DaocEnums.Resistances.Energy),
                new ResistanceBonus(DaocEnums.bonustype.Resistance,  26, "Heat", false, DaocEnums.Resistances.Heat),
                new ResistanceBonus(DaocEnums.bonustype.Resistance,  26, "Matter", false, DaocEnums.Resistances.Matter),
                new ResistanceBonus(DaocEnums.bonustype.Resistance,  26, "Slash", false, DaocEnums.Resistances.Slash),
                new ResistanceBonus(DaocEnums.bonustype.Resistance,  26, "Spirit", false, DaocEnums.Resistances.Spirit),
                new ResistanceBonus(DaocEnums.bonustype.Resistance,  26, "Thrust", false, DaocEnums.Resistances.Thrust),
                new ResistanceBonus(DaocEnums.bonustype.Resistance,  26, "Body", false, DaocEnums.Resistances.BodyRes),
                new ResistanceBonus(DaocEnums.bonustype.Resistance,  26, "Spirit", false, DaocEnums.Resistances.SpiritRes1),
                new ResistanceBonus(DaocEnums.bonustype.Resistance,  26, "Spirit", false, DaocEnums.Resistances.SpiritRes2),
                new ResistanceBonus(DaocEnums.bonustype.Resistance,  26, "Body", false, DaocEnums.Resistances.BodyRes2),
                new ResistanceBonus(DaocEnums.bonustype.Resistance,  26, "Body", false, DaocEnums.Resistances.BodyRes3),
                new ResistanceBonus(DaocEnums.bonustype.Resistance,  26, "Heat", false, DaocEnums.Resistances.HeatRes),
                new ResistanceBonus(DaocEnums.bonustype.Resistance,  26, "Matter", false, DaocEnums.Resistances.MatterRes),
                new ResistanceBonus(DaocEnums.bonustype.Resistance,  26, "Energy", false, DaocEnums.Resistances.EnergyRes),
                new ResistanceBonus(DaocEnums.bonustype.Resistance,  26, "Energy", false, DaocEnums.Resistances.EnergyRes2),
                new ResistanceBonus(DaocEnums.bonustype.Resistance,  26, "Cold", false, DaocEnums.Resistances.ColdRes),

            };

        }
        static void Main(string[] args)
        {
            var BonusList = GetBonusList();
            using (StreamReader file = File.OpenText(@"C:\Users\Matt\Downloads\static_objects.json"))
            {
                JsonSerializer serializer = new JsonSerializer();
                Items items = (Items)serializer.Deserialize(file, typeof(Items));

                foreach (Item item in items.items)
                {
                    if(item.name=="Poor Sod's Belt")
                    {
                        var asd = 12;
                    }
                    if (item.bonuses != null)
                    {
                        foreach (var bonus in item.bonuses)
                        {
                            item.mappedBonuses.Add(FindMappedBonus(bonus));
                        }
                    }
                }
                var categories = items.items.Select(x => x.category).Distinct().ToList();
                var realms = items.items.Select(x => x.realm).Distinct().ToList();

                //var path = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "items");
                var path = @"C:\Users\Matt\Documents\GitHub\DaocApi\DaocApi\src\assets";
                var accessoryIcons = items.items.Where(x => x.category == 5 && x.flags.dyable == false && x.flags.emblemizable == false && x.requirements?.level_required > 45).Select(x => x.icon).Distinct().ToList();
                var notNullItems = items.items.Where(x => x.bonuses != null);
                var distinctBonuses = notNullItems.SelectMany(x => x.bonuses.Select(y => y.type).Distinct().ToList()).OrderBy(x => x).Distinct().ToList();
                var distinctResBonuses = notNullItems.Select(b => b.bonuses).ToList();// x.Select(y => y.type.GetValueOrDefault() == 5)).ToList();//.SelectMany(z => z.Select(a => a.id)).Distinct().ToList();
                                                                                      // var distintResBonuses = items.items.Where(x => x.bonuses != null).Where(x.bonuses.Select.SelectMany(x => x.bonuses.Select(y => y.id).Distinct().ToList()).OrderBy(x => x).Distinct().ToList();
               // var bonuses = distinctResBonuses.SelectMany(x => x.Where(y => y.type == 5)).OrderBy(a => a.id).Where(z => z.id).Distinct().ToList();
                var jewelIcons = new List<int>() { 52, 262, 514, 115, 104, 117, 118, 119, 540, 110, 116, 113, 114, 542, 111, 112, 105, 106, 107, 496, 498, 524, 549, 550, 555, 595 };
                var neckIcons = new List<int>() { 523, 101, 623, 509, 101, 500, 3807, 3808, 3809 };
                var bracerIcons = new List<int>() { 598, 619, 622 };
                var beltIcons = new List<int>() { 597 };
                var ringIcons = new List<int>() { 103, 2524, 515 };

                var legs = items.items.Where(x => x.category == 2 && x.type_data.slot == 7).ToList();
                WriteItemsToFile(legs, Path.Combine(path, "AllLegs.json"));
                var arms = items.items.Where(x => x.category == 2 && x.type_data.slot == 8).ToList();
                WriteItemsToFile(arms, Path.Combine(path, "AllArms.json"));
                var helms = items.items.Where(x => x.category == 2 && x.type_data.slot == 1).ToList();
                WriteItemsToFile(helms, Path.Combine(path, "AllHelms.json"));
                var boots = items.items.Where(x => x.category == 2 && x.type_data.slot == 3).ToList();
                WriteItemsToFile(boots, Path.Combine(path, "AllBoots.json"));
                var hands = items.items.Where(x => x.category == 2 && x.type_data.slot == 2).ToList();
                WriteItemsToFile(hands, Path.Combine(path, "AllHands.json"));
                var chests = items.items.Where(x => x.category == 2 && x.type_data.slot == 5).ToList();
                WriteItemsToFile(chests, Path.Combine(path, "AllChests.json"));

                var myths = items.items.Where(x => x.category == 8).ToList();
                WriteItemsToFile(chests, Path.Combine(path, "AllMythirians.json"));

                var mappedIcons = jewelIcons.Concat(neckIcons).Concat(bracerIcons).Concat(beltIcons).Concat(ringIcons);

                var unMappedIcons = accessoryIcons.Where(x => !mappedIcons.Any(y => y == x)).OrderBy(x => x).ToList();
                var jewels = items.items.Where(x => x.category == 5 && jewelIcons.Any(y => y == x.icon)).ToList();
                WriteItemsToFile(jewels, Path.Combine(path, "AllJewels.json"));
                var necks = items.items.Where(x => x.category == 5 && neckIcons.Any(y => y == x.icon)).ToList();
                WriteItemsToFile(necks, Path.Combine(path, "AllNecks.json"));
                var cloaks = items.items.Where(x => x.category == 5 && x.dye_type.HasValue).ToList();
                WriteItemsToFile(cloaks, Path.Combine(path, "AllCloaks.json"));
                var belts = items.items.Where(x => x.category == 5 && beltIcons.Any(y => y == x.icon)).ToList();
                WriteItemsToFile(belts, Path.Combine(path, "AllBelts.json"));
                var rings = items.items.Where(x => x.category == 5 && ringIcons.Any(y => y == x.icon)).ToList();
                WriteItemsToFile(rings, Path.Combine(path, "AllRings.json"));
                var bracers = items.items.Where(x => x.category == 5 && bracerIcons.Any(y => y == x.icon)).ToList();
                WriteItemsToFile(bracers, Path.Combine(path, "AllBracers.json"));
                var twohand = items.items.Where(x => x.category == 1 && x.type_data.two_handed == 1).ToList();
                WriteItemsToFile(twohand, Path.Combine(path, "AllTwoHand.json"));
                var onehand = items.items.Where(x => x.category == 1 && x.type_data.two_handed == 0 && x.type_data.left_handed == 0).ToList();
                WriteItemsToFile(onehand, Path.Combine(path, "AllOneHand.json"));
                var lefthand = items.items.Where(x => x.category == 1 && x.type_data.two_handed == 0 && x.type_data.left_handed == 1).ToList();
                WriteItemsToFile(lefthand, Path.Combine(path, "AllLeftHand.json"));
                var ranged = items.items.Where(x => x.category == 1 && x.type_data.range.HasValue).ToList();
                WriteItemsToFile(ranged, Path.Combine(path, "AllRanged.json"));

            }
        }
    }
}

